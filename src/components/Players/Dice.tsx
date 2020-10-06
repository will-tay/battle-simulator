import React, { FunctionComponent, useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import { IRootState } from '../../store/rootReducer'
import { getCombatRound, setLastPlayerRoll } from '../../store/ducks/combat'
import { bindActionCreators } from '@reduxjs/toolkit'

interface IDice {
  playerId: string
  combatRound: number
  setLastPlayerRoll: typeof setLastPlayerRoll
}

export const Dice: FunctionComponent<IDice> = ({ combatRound, playerId, setLastPlayerRoll }) => {
  const [diceOne, setDiceOne] = useState(0)
  const [diceTwo, setDiceTwo] = useState(0)
  useEffect(() => {
    setDiceOne(0)
    setDiceTwo(0)
    if (combatRound > -1) rollDie()
  }, [combatRound])
  const rollDie = () => {
    const firstDie = rollSixSidedDie()
    const secondDie = rollSixSidedDie()
    setDiceOne(firstDie)
    setDiceTwo(secondDie)
    setLastPlayerRoll({ playerId, roll: (firstDie + secondDie) })
  }
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Typography>Dice one is {diceOne}</Typography>
      <Typography>Dice two is {diceTwo}</Typography>
      { diceOne + diceTwo > 0 &&
        <Typography>Total is <strong>{ diceOne + diceTwo }</strong></Typography>
      }
    </Box>
  )
}

const rollSixSidedDie = () => Math.floor(Math.random() * ((6 - 1) + 1) + 1)

const mapStateToProps = (state: IRootState) => ({
  combatRound: getCombatRound(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  setLastPlayerRoll
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dice)
