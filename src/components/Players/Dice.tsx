import React, { FunctionComponent } from 'react'
import DiceRoller from 'react-dice-roll'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

const DiceContainer = styled(Box)`
  & ._3dbox ._3dface {
    box-shadow: none;
  }
  & button:last-child {
    margin-top: 1rem;
  }
`

export const Dice: FunctionComponent = () => {
  const rollDoneCallback = (num: number) => {
    console.log(num)
  }
  return (
    <DiceContainer
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <DiceRoller
        onRoll={rollDoneCallback}
        size={80}
      />
      <DiceRoller
        onRoll={rollDoneCallback}
        size={80}
      />
    </DiceContainer>
  )
}

export default Dice
