import styled, { keyframes } from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, Link, OpenNewIcon, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'

const LeftWhiteHeader = styled.p`
  color: white;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 52px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 62px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 82px;
  }
  @media (min-width: 1500px) {
    white-space: nowrap;
  }
`

const LeftColHeader = styled.p`
  color: #58ffa4;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 52px;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
    line-height: 62px;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    font-size: 60px;
    line-height: 82px;
  }
`

const MainContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 3rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    margin-top: 5rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 10rem;
  }
`
const MainLeft = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;


 @media (max-width: 767px) {
    width:100%;
    align-items:center;
    text-align:center;
    margin-bottom:8rem;
    margin-top:3rem;
    padding-left:2rem;
    padding-right:2rem;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width:100%;
      align-items:center;
    text-align:center;
     margin-bottom:8rem;
    margin-top35rem;
       padding-left:4rem;
    padding-right:4rem;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width:50%;
    padding-right:4rem;
  }
  @media (min-width: 1500px) {
    width:50%;
    padding-right:6rem;
  }
`
const MainRight = styled.div`
  display: flex;
  justify-content: center;
  align-itms: center;
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 6rem;
    padding-right: 6rem;
    display: none;
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    display: none;
  }

  /* Desktop styles */
  @media (min-width: 1024px) {
    width: 50%;
  }
`
const ForthMainPara = styled.p`
  color: white;
  font-size: 20px;
  fontweight: 500;
  line-height: 35px;
  margin-top: 1rem;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2rem;
`

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`

const floatAnimationRe = keyframes`
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-20px);
  }
`

const CoinContainer = styled.div`
  animation: ${floatAnimation} 3s ease-in-out infinite;
  position: absolute;
  z-index: 90;
`

const CoinContainer2 = styled.div`
  animation: ${floatAnimation} 3s ease-in-out infinite;
  position: absolute;
  z-index: 90;
  left: 270px;
  top: 43%;
`

const CoinContainer3 = styled.div`
  animation: ${floatAnimation} 3s ease-in-out infinite;
  position: absolute;
  z-index: 90;
  left: 440px;
  top: 70%;
`

const FifthSection = () => {
  const { t } = useTranslation()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()

  return (
    <>
      <MainContainer>
        <MainRight>
          {/* <img src="images/forthright.png"></img> */}
          <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
            <CoinContainer>
              <img src="images/coinicon.png" alt="img" style={{ width: '85%' }} />
            </CoinContainer>
            <CoinContainer2 style={{ transform: 'translateY(-50%)' }}>
              <img src="images/coiniconsec.png" alt="img" style={{ width: '85%' }} />
            </CoinContainer2>
            <CoinContainer3 style={{ transform: 'translateY(-50%)' }}>
              <img src="images/coiniconthird.png" alt="img" style={{ width: '85%' }} />
            </CoinContainer3>
          </div>
        </MainRight>
        <MainLeft>
          <LeftWhiteHeader>Power Up Your De-Fi</LeftWhiteHeader>
          <LeftWhiteHeader>Experience With</LeftWhiteHeader>
          <LeftColHeader>Secure Ecosystem</LeftColHeader>
          <ForthMainPara>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
            without relying on meaningful content.
          </ForthMainPara>

          <ButtonContainer>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
              rel="noreferrer"
              target="_blank"
            >
              <Button
                scale="md"
                style={{ borderRadius: isXs ? 12 : undefined, padding: '0 2rem', width: '184px' }}
                variant="primary"
              >
                {t('Explore')}
              </Button>
            </a>

            <a
              style={{ marginRight: '10px' }}
              rel="noreferrer"
              target="_blank"
              href="https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics"
            >
              <Button
                scale="md"
                style={{
                  borderRadius: isXs ? 12 : undefined,
                  background: 'white',
                  color: 'black',
                  padding: '0 2rem',
                  width: '184px',
                }}
              >
                {t('Learn More')}
              </Button>
            </a>
          </ButtonContainer>
        </MainLeft>
      </MainContainer>
    </>
  )
}

export default FifthSection
