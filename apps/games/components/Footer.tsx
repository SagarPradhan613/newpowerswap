import { useMemo } from 'react'
import { footerLinks } from '@pancakeswap/uikit'
import Footer from '@pancakeswap/uikit/components/Footer'
import { languageList, useTranslation } from '@pancakeswap/localization'
import { useTheme } from 'next-themes'
import { ChainId } from '@pancakeswap/chains'
import { useCakePrice } from 'hooks/useCakePrice'

const FooterPage = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { data: cakePrice } = useCakePrice()

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <Footer
      chainId={ChainId.BSC}
      items={getFooterLinks}
      isDark={isDark}
      toggleTheme={toggleTheme}
      langs={languageList}
      setLang={setLanguage}
      currentLang={currentLanguage.code}
      cakePriceUsd={cakePrice ? Number(cakePrice) : undefined}
      buyCakeLabel={t('Buy CAKE')}
      buyCakeLink="/swap"
    />
  )
}

export default FooterPage
