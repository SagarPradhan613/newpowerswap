import styled from 'styled-components'
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
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    width:100%;
      align-items:center;
    text-align:center;
     margin-bottom:8rem;
    margin-top35rem;
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
const FifthSection = () => {
  const { t } = useTranslation()
  const { isMobile, isXs, isMd } = useMatchBreakpoints()

  return (
    <>
      <MainContainer>
        <MainRight>
          {/* <img src="images/forthright.png"></img> */}
          <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute' }}>
              <img src="images/coinicon.png" alt="img" />
            </div>
            <div style={{ position: 'absolute', left: '35%', top: '67%', transform: 'translateY(-50%)' }}>
              <img src="images/coiniconsec.png" alt="img" />
            </div>
            <div style={{ position: 'absolute', left: '63%', top: '80%', transform: 'translateY(-50%)' }}>
              <img src="images/coiniconthird.png" alt="img" />
            </div>
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
