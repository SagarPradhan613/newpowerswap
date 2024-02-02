import { styled } from 'styled-components'
import { Box, Text, lightColors, useMatchBreakpoints, BoxProps } from '@pancakeswap/uikit'
import CountUp from 'react-countup'
import useTheme from 'hooks/useTheme'

export const Divider = styled.div`
  height: 45px;
  width: 1px;
  background-color: ${lightColors.inputSecondary};
`

interface MetricsCardProps extends BoxProps {
  title: string
  value: number
  description: string
  prefix?: string
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, description, prefix, ...rest }) => {
  const { theme } = useTheme()
  const { isMobile } = useMatchBreakpoints()
  return (
    <Box {...rest}>
      {/* <Text fontSize={isMobile ? '16px' : '20px'} textAlign="center" fontWeight={600} lineHeight="120%">
        {title}
      </Text> */}
      {/* <Text
        lineHeight="110%"
        textAlign="center"
        fontWeight={600}
        fontSize={isMobile ? '32px' : '40px'}
        color={theme.colors.secondary}
      >
        <CountUp
          start={0}
          preserveValue
          delay={0}
          end={value}
          decimalPlaces={3}
          decimals={0}
          duration={1}
          prefix={prefix ?? ''}
          separator=","
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
          
        </CountUp>
        <p style={{color:"white",fontWeight:"700",fontSize:"30px"}}>Users</p>
      </Text> */}
      <div
        style={{
          justifyContent: 'center',
          marginTop: '2rem',
          display: 'flex',
          whiteSpace: 'nowrap',
          alignItems: 'center',
          color: 'white',
          fontWeight: '700',
          fontSize: '30px',
        }}
      >
        <CountUp
          start={0}
          preserveValue
          delay={0}
          end={value}
          decimalPlaces={3}
          decimals={0}
          duration={1}
          prefix={prefix ?? ''}
          separator=","
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
        <p style={{ color: 'white', marginLeft: '10px', fontWeight: '700', fontSize: '30px' }}>{title}</p>
      </div>
      <Text
        style={{ marginTop: '1rem' }}
        fontSize={isMobile ? '16px' : '16px'}
        textAlign="center"
        fontWeight={500}
        lineHeight="120%"
        color="white"
      >
        {description}
      </Text>
    </Box>
  )
}
