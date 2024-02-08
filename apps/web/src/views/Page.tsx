import { useTranslation } from '@pancakeswap/localization'
import { Swap } from '@pancakeswap/widgets-internal'
import { ChainId } from '@pancakeswap/chains'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const isBSC = chainId === ChainId.BSC
  const externalText = isBSC ? t('Bridge assets to BNB Chain') : ''
  const externalLinkUrl = isBSC ? 'https://bridge.pancakeswap.finance/' : ''

  return (
    <Swap.Page
      style={{ position: 'relative' }}
      removePadding={removePadding}
      noMinHeight={noMinHeight}
      hideFooterOnDesktop={hideFooterOnDesktop}
      helpUrl={helpUrl}
      externalText={externalText}
      externalLinkUrl={externalLinkUrl}
      {...props}
    >
      <div>
        <div style={{ position: 'absolute', height: '100%', width: '100%', top: '0', left: '0' }}>
          <img src="images/bgmasktopleft.png" style={{ height: '100%' }} alt="bg" />
        </div>
        <div style={{ position: 'absolute', height: '100%', top: '0', right: '0' }}>
          <img src="images/bgmasktopright.png" style={{ height: '100%' }} alt="bg" />
        </div>
        <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
          <img src="images/bgmaskbottomright.png" alt="bg" />
        </div>
        <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
          <img src="images/bgmaskbottomleft.png" alt="bg" />
        </div>
      </div>

      {children}
    </Swap.Page>
  )
}

export default Page
