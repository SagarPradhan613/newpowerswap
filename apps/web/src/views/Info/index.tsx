import { useTranslation } from '@pancakeswap/localization'
import { SubMenuItems } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { multiChainQueryStableClient } from 'state/info/constant'
import { useChainNameByQuery, useMultiChainPath } from 'state/info/hooks'

import InfoNav from './components/InfoNav'

export const InfoPageLayout = ({ children }) => {
  const router = useRouter()
  const chainName = useChainNameByQuery()
  const chainPath = useMultiChainPath()
  const { t } = useTranslation()
  const isStableSwap = router.query.type === 'stableSwap'
  const subMenuItems = useMemo(() => {
    const config = [
      {
        label: t('V3'),
        href: `/info/v3${chainPath}`,
      },
      {
        label: t('V2'),
        href: `/info${chainPath}`,
      },
    ]
    if (multiChainQueryStableClient[chainName])
      config.push({
        label: t('StableSwap'),
        href: `/info${chainPath}?type=stableSwap`,
      })
    return config
  }, [t, chainPath, chainName])

  return (
    <>
      <div style={{ marginTop: '-11rem' }}>
        <div>
          {/* <div style={{ position: 'absolute', height: '100%', width: '100%', top: '0', left: '0' }}>
          <img src="/images/bgmasktopleft.png" style={{ height: '100%' }} alt="bg" />
        </div> */}
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
        <SubMenuItems
          items={subMenuItems}
          activeItem={isStableSwap ? `/info${chainPath}?type=stableSwap` : `/info${chainPath}`}
        />

        <InfoNav isStableSwap={isStableSwap} />
        {children}
      </div>
    </>
  )
}
