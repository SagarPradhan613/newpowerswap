import { Box } from '@pancakeswap/uikit'
import { useMemo } from 'react'
import Banner from 'views/TradingReward/components/Banner'
import { ChainId } from '@pancakeswap/chains'
import { useActiveChainId } from 'hooks/useActiveChainId'
import YourTradingReward from 'views/TradingReward/components/YourTradingReward'
import CurrentRewardPool from 'views/TradingReward/components/CurrentRewardPool'
import HowToEarn from 'views/TradingReward/components/HowToEarn'
import RewardsBreakdown from 'views/TradingReward/components/RewardsBreakdown'
import Questions from 'views/TradingReward/components/Questions'
import useAllTradingRewardPair, { RewardStatus, RewardType } from 'views/TradingReward/hooks/useAllTradingRewardPair'
import useCampaignIdInfo from 'views/TradingReward/hooks/useCampaignIdInfo'
import useAllUserCampaignInfo from 'views/TradingReward/hooks/useAllUserCampaignInfo'
import SubMenu from 'views/TradingReward/components/SubMenu'

const TradingReward = () => {
  const { chainId } = useActiveChainId()

  const { data: allTradingRewardPairData, isFetching: isAllTradingRewardPairDataFetching } = useAllTradingRewardPair({
    status: RewardStatus.ALL,
    type: RewardType.CAKE_STAKERS,
  })

  const campaignId = allTradingRewardPairData.campaignIds[allTradingRewardPairData.campaignIds.length - 1]
  const { data: campaignInfoData, isFetching: isCampaignInfoFetching } = useCampaignIdInfo({
    campaignId,
    type: RewardType.CAKE_STAKERS,
  })
  const { data: allUserCampaignInfo, isFetching: isAllUserCampaignInfo } = useAllUserCampaignInfo({
    campaignIds: allTradingRewardPairData.campaignIds,
    type: RewardType.CAKE_STAKERS,
  })

  const isFetching = useMemo(
    () => isAllTradingRewardPairDataFetching || isAllUserCampaignInfo || isCampaignInfoFetching,
    [isAllTradingRewardPairDataFetching, isAllUserCampaignInfo, isCampaignInfoFetching],
  )

  const currentUserIncentive = useMemo(
    () =>
      allTradingRewardPairData.campaignIdsIncentive.find(
        (campaign) => campaign.campaignId.toLowerCase() === campaignId.toLowerCase(),
      ),
    [campaignId, allTradingRewardPairData],
  )

  const currentUserCampaignInfo = useMemo(
    () => allUserCampaignInfo.find((campaign) => campaign.campaignId.toLowerCase() === campaignId.toLowerCase()),
    [campaignId, allUserCampaignInfo],
  )

  const totalAvailableClaimData = useMemo(() => {
    const currentTime = Date.now() / 1000

    return allUserCampaignInfo
      .map((item) => {
        const tradingRewardPair = allTradingRewardPairData.campaignIdsIncentive.find(
          (pair) => pair.campaignId === item.campaignId,
        )

        return {
          ...item,
          campaignClaimTime: tradingRewardPair?.campaignClaimTime,
          campaignClaimEndTime: tradingRewardPair?.campaignClaimEndTime,
        }
      })
      .filter((item) => currentTime > item?.campaignClaimTime ?? 0)
  }, [allTradingRewardPairData, allUserCampaignInfo])

  if (chainId !== ChainId.BSC) {
    return null
  }

  return (
    <>
      <div>
        <div style={{ position: 'absolute', height: '100%', width: '100%', top: '0', left: '0' }}>
          <img src="/images/bgmasktopleft.png" style={{ height: '100%' }} alt="bg" />
        </div>
        <div style={{ position: 'absolute', height: '100%', top: '0', right: '0' }}>
          <img src="/images/bgmasktopright.png" style={{ height: '100%' }} alt="bg" />
        </div>
        <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
          <img src="/images/bgmaskbottomright.png" alt="bg" />
        </div>
        <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
          <img src="/images/bgmaskbottomleft.png" alt="bg" />
        </div>
      </div>
      <Box style={{ marginTop: '-10rem' }}>
        <SubMenu />
        <Banner />
        <YourTradingReward
          isFetching={isFetching}
          incentives={currentUserIncentive}
          qualification={allTradingRewardPairData.qualification}
          campaignIds={allTradingRewardPairData.campaignIds}
          campaignIdsIncentive={allTradingRewardPairData.campaignIdsIncentive}
          rewardInfo={allTradingRewardPairData.rewardInfo}
          currentUserCampaignInfo={currentUserCampaignInfo}
          totalAvailableClaimData={totalAvailableClaimData}
        />
        <CurrentRewardPool
          campaignId={campaignId}
          incentives={currentUserIncentive}
          campaignInfoData={campaignInfoData}
          rewardInfo={allTradingRewardPairData.rewardInfo}
        />
        <HowToEarn />
        <RewardsBreakdown
          allUserCampaignInfo={allUserCampaignInfo}
          allTradingRewardPairData={allTradingRewardPairData}
          campaignPairs={allTradingRewardPairData.campaignPairs}
        />
        <Questions />
      </Box>
    </>
  )
}

export default TradingReward
