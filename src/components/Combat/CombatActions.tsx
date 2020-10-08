import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { IRootState } from '../../store/rootReducer'
import { getLastCombatAction, getCombatRound } from '../../store/ducks/combat'
import AttackButton from './AttackButton'
import { randomNumberFromRange } from '../../utils/number'

interface ICombatActions {
  lastCombatAction: string
}

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const ActionTextContainer = styled(Box)`
  user-select: none;
`

const CombatActions: FunctionComponent<ICombatActions> = ({ lastCombatAction }) => {
  return (
    <ActionContainer>
      { lastCombatAction &&
        <ActionTextContainer
          bgcolor={'secondary.dark'}
          boxShadow={4}
          color={'white'}
          position={'absolute'}
          p={'1rem'}
          top={`-${randomNumberFromRange(400, 600)}%`}
          left={`${randomNumberFromRange(25, 55)}%`}
        >
          <Typography>{lastCombatAction}</Typography>
        </ActionTextContainer>
      }
      <AttackButton />
    </ActionContainer>
  )
}

const mapStateToProps = (state: IRootState) => ({
  lastCombatAction: getLastCombatAction(state)
})

export default connect(mapStateToProps)(CombatActions)
