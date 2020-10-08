import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import styled, { css, keyframes } from 'styled-components'

import { IRootState } from '../../store/rootReducer'
import { getLastCombatAction, getIsOver } from '../../store/ducks/combat'
import AttackButton from './AttackButton'
import { randomNumberFromRange } from '../../utils/number'

interface ICombatActions {
  lastCombatAction: string
  gameOver: boolean
}

interface IActionTextComp {
  gameOver: boolean
}

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const fadeOut = () => (
  keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `
)

const ActionText = styled(Box)<IActionTextComp>`
  user-select: none;
  opacity: 1;
  animation: ${({ gameOver }) => gameOver ? css`${fadeOut()} 0.5s linear 1` : null};
`

const CombatActions: FunctionComponent<ICombatActions> = ({ lastCombatAction, gameOver }) => {
  return (
    <ActionContainer>
      { lastCombatAction && !gameOver &&
        <ActionText
          bgcolor={'secondary.dark'}
          boxShadow={4}
          color={'white'}
          position={'absolute'}
          p={'1rem'}
          top={`-${randomNumberFromRange(400, 600)}%`}
          left={`${randomNumberFromRange(25, 55)}%`}
          gameOver={gameOver}
        >
          <Typography>{lastCombatAction}</Typography>
        </ActionText>
      }
      <AttackButton />
    </ActionContainer>
  )
}

const mapStateToProps = (state: IRootState) => ({
  lastCombatAction: getLastCombatAction(state),
  gameOver: getIsOver(state)
})

export default connect(mapStateToProps)(CombatActions)
