import styled from 'styled-components'
import { BottomDrawer, Flex, Modal, ModalV2, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useCallback, useContext, useEffect, useState } from 'react'
import { SwapFeaturesContext } from 'views/Swap/SwapFeaturesContext'
import PriceChartContainer from 'views/Swap/components/Chart/PriceChartContainer'
import { Field } from 'state/swap/actions'
import { useDefaultsFromURLSearch, useSingleTokenSwapInfo, useSwapState } from 'state/swap/hooks'
import { useCurrency } from 'hooks/Tokens'
import { Currency } from '@pancakeswap/sdk'
import useWarningImport from 'views/Swap/hooks/useWarningImport'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import currencyId from 'utils/currencyId'
import replaceBrowserHistory from '@pancakeswap/utils/replaceBrowserHistory'
import Page from 'views/Page'
import Swap from 'views/Swap'
import PriceChart from 'views/Swap/components/Chart/PriceChart'

const TopContainer = styled.div`
  width: 100%;
  background-color: #0a1a11;
  padding: 20px;
  z-index: 90;
  position: relative;
`

const MainSecContainer = styled.div`
  width: 100%;
  background-color: #102c1d;
  position: relative;
  z-index: 90;
  display: flex;
  padding: 20px;
  border-radius: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const LeftContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
`

const RightContainer = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 1rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const SecondSection = () => {
  const { isDesktop } = useMatchBreakpoints()
  const {
    isChartExpanded,
    isChartDisplayed,
    setIsChartDisplayed,
    setIsChartExpanded,
    isChartSupported,
    isHotTokenSupported,
  } = useContext(SwapFeaturesContext)

  // swap state & price data
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)

  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  const singleTokenPrice = useSingleTokenSwapInfo(
    inputCurrencyId,
    inputCurrency,
    outputCurrencyId,
    outputCurrency,
    isChartSupported,
  )
  const warningSwapHandler = useWarningImport()
  useDefaultsFromURLSearch()
  const { onCurrencySelection } = useSwapActionHandlers()

  const handleOutputSelect = useCallback(
    (newCurrencyOutput: Currency) => {
      onCurrencySelection(Field.OUTPUT, newCurrencyOutput)
      warningSwapHandler(newCurrencyOutput)

      const newCurrencyOutputId = currencyId(newCurrencyOutput)
      if (newCurrencyOutputId === inputCurrencyId) {
        replaceBrowserHistory('inputCurrency', outputCurrencyId)
      }
      replaceBrowserHistory('outputCurrency', newCurrencyOutputId)
    },

    [inputCurrencyId, outputCurrencyId, onCurrencySelection, warningSwapHandler],
  )
  return (
    <>
      <TopContainer>
        <MainSecContainer>
          <LeftContainer>
            <img src="images/hdchart.png" style={{ width: '100%', height: '100%' }} alt="img" />
          </LeftContainer>
          <RightContainer>
            <div style={{ height: '50%', width: '100%' }}>
              <img src="images/topchart.png" style={{ width: '100%', height: '100%' }} alt="img" />
            </div>
            <div style={{ marginTop: '10px', height: '50%', width: '100%' }}>
              <img src="images/bottomchart.png" style={{ width: '100%', height: '100%' }} alt="img" />
            </div>
          </RightContainer>
        </MainSecContainer>
      </TopContainer>
    </>
  )
}

export default SecondSection
