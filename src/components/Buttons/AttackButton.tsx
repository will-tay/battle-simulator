import React, { FunctionComponent } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { incrementCombatRound, getIsOver } from '../../store/ducks/combat'
import { IRootState } from '../../store/rootReducer'

interface IAttackButton {
  incrementCombatRound: typeof incrementCombatRound
  isGameOver: boolean
}

export const AttackButton: FunctionComponent<IAttackButton> = ({ incrementCombatRound, isGameOver }) => {
  const handleClick = () => incrementCombatRound()
  return (
    <Button
      color={'primary'}
      disabled={isGameOver}
      onClick={handleClick}
      variant={'contained'}
    >
      { isGameOver ? 'Game Over' : 'Attack!' }
    </Button>
  )
}

const mapStateToProps = (state: IRootState) => ({
  isGameOver: getIsOver(state)
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  incrementCombatRound
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AttackButton)
