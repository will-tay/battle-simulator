import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { IRootState } from '../../store/rootReducer'
import { getLastCombatAction, getIsOver } from '../../store/ducks/combat'
import { AttackButton } from '../Buttons'
import { randomNumberFromRange } from '../../utils/number'

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const ActionText = styled(Box)`
  user-select: none;
`

interface ICombatActions {
  lastCombatAction: string
  gameOver: boolean
}

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
          left={`${randomNumberFromRange(25, 65)}%`}
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
