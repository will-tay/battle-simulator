import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'

export const AttackButton: FunctionComponent = () => {
  return (
    <Button
      color={'primary'}
      variant={'contained'}
    >
      Attack!
    </Button>
  )
}

export default AttackButton
