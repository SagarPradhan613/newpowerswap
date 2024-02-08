import { Box, BoxProps, Flex } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

const Wrapper = styled(Flex)`
  overflow-x: auto;
  padding: 0;
  border-radius: 24px 24px 0 0;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`

const Inner = styled(Flex)`
  justify-content: space-between;
  // background-color: ${({ theme }) => theme.colors.input};
  background-color: rgba(88, 255, 164, 0.5);
  width: 100%;
`

interface TabProps extends BoxProps {
  isActive?: boolean
  onClick?: () => void
}

export const TabToggle = styled(Box).attrs({
  as: 'button',
})<TabProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  border: 0;
  outline: 0;
  margin: 0;
  border-radius: 24px 24px 0 0;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.text : theme.colors.textSubtle)};
  background-color: ${({ theme, isActive }) => (isActive ? theme.card.background : theme.colors.input)};
  box-shadow: none;
`

TabToggle.defaultProps = {
  p: '16px',
}

interface TabToggleGroupProps {
  children: React.ReactElement[]
}

export const TabToggleGroup: React.FC<React.PropsWithChildren<TabToggleGroupProps>> = ({ children }) => {
  return (
    <Wrapper p={['0 4px', '0 16px']}>
      <Inner
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #58FFA4',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
        }}
      >
        {children}
      </Inner>
    </Wrapper>
  )
}
