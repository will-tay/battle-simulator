import React, { FunctionComponent, useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { bindActionCreators } from '@reduxjs/toolkit'

import { IRootState } from '../../store/rootReducer'
import { getCombatRound, setLastPlayerRoll, setRoundInProgress } from '../../store/ducks/combat'
import { rollSixSidedDie } from '../../utils/number'

interface IDice {
  playerId: string
  combatRound: number
  setLastPlayerRoll: typeof setLastPlayerRoll
  setRoundInProgress: typeof setRoundInProgress
}

interface IDiceCompProps {
  value: number
}

const rollingAnimation = (value: number) => (
  keyframes`
    0% { content:'\\2680'; }
    20% { content:'\\2681'; }
    40% { content:'\\2682'; }
    60% { content:'\\2683'; }
    80% { content:'\\2684'; }
    90% { content:'\\2685'; }
    100% { content:'\\268${value - 1}'; }
  `
)

const DiceComp = styled.div<IDiceCompProps>`
  font-size: 6rem;
  font-weight: 800;
  color: ${props => props.theme.palette.primary.main};
  &::after {
    animation: ${({ value }) => css`${rollingAnimation(value)} 0.5s linear 1`};
    content: ${({ value }) => value > 0 && `'\\268${value - 1}'`};
  }
`

export const Dice: FunctionComponent<IDice> = ({ combatRound, playerId, setLastPlayerRoll, setRoundInProgress }) => {
  const [diceOne, setDiceOne] = useState(0)
  const [diceTwo, setDiceTwo] = useState(0)
  const [diceTotal, setDiceTotal] = useState(0)
  useEffect(() => {
    setDiceOne(0)
    setDiceTwo(0)
    if (combatRound > -1) {
      rollDie()
    }
  }, [combatRound])
  const rollDie = () => {
    const firstDie = rollSixSidedDie()
    const secondDie = rollSixSidedDie()
    setTimeout(() => {
      setDiceTotal(firstDie + secondDie)
      setLastPlayerRoll({ playerId, roll: (firstDie + secondDie) })
      setRoundInProgress({ roundInProgress: false })
    }, 500)
    setDiceOne(firstDie)
    setDiceTwo(secondDie)
  }
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box
        display={'flex'}
      >
        <DiceComp value={diceOne} />
        <DiceComp value={diceTwo} />
      </Box>
      { diceTotal > 0 &&
        <Typography>Attack total: <strong>{ diceTotal }</strong></Typography>
      }
    </Box>
  )
}

const mapStateToProps = (state: IRootState) => ({
  combatRound: getCombatRound(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  setLastPlayerRoll,
  setRoundInProgress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dice)
