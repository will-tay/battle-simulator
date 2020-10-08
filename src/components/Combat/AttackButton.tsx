import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { incrementCombatRound, setRoundInProgress, getIsOver, getIsRoundInProgress } from '../../store/ducks/combat'
import { IRootState } from '../../store/rootReducer'

interface IAttackButton {
  incrementCombatRound: typeof incrementCombatRound
  setRoundInProgress: typeof setRoundInProgress
  isGameOver: boolean
  isRoundInProgress: boolean
}

const AttackButtonComp = styled(Button)`
  max-width: max-content;
  margin: 0 auto;
`

export const AttackButton: FunctionComponent<IAttackButton> = ({ incrementCombatRound, isGameOver, setRoundInProgress, isRoundInProgress }) => {
  const handleClick = () => {
    incrementCombatRound()
    setRoundInProgress({ roundInProgress: true })
  }
  return (
    <AttackButtonComp
      color={'primary'}
      disabled={isGameOver || isRoundInProgress}
      onClick={handleClick}
      variant={'contained'}
    >
      { isGameOver ? 'Game Over!' : isRoundInProgress ? 'Attacking!' : 'Attack!' }
    </AttackButtonComp>
  )
}

const mapStateToProps = (state: IRootState) => ({
  isGameOver: getIsOver(state),
  isRoundInProgress: getIsRoundInProgress(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  incrementCombatRound,
  setRoundInProgress
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AttackButton)
