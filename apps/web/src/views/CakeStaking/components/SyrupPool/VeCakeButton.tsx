import { Trans } from '@pancakeswap/localization'
import { Button } from '@pancakeswap/uikit'
import { useRouter } from 'next/router'
import { memo } from 'react'

const BUTTON_TEXT = {
  get: <Trans>Get vePOWER now!</Trans>,
  migrate: <Trans>Migrate to vePOWER</Trans>,
  check: <Trans>Check out vePOWER</Trans>,
}

export const VeCakeButton: React.FC<{ type: 'get' | 'migrate' | 'check'; style?: React.CSSProperties }> = memo(
  ({ type, style }) => {
    const { push } = useRouter()
    return (
      <Button
        width="100%"
        style={style}
        onClick={() => {
          push('/cake-staking')
        }}
      >
        {BUTTON_TEXT[type]}
      </Button>
    )
  },
)
