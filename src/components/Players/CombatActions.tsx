import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'

import { IRootState } from '../../store/rootReducer'
import { getLastCombatAction } from '../../store/ducks/combat'
import { AttackButton } from '../Buttons'
import { randomNumberFromRange } from '../../utils/number'

const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

interface ICombatActions {
  lastCombatAction: string
}

const CombatActions: FunctionComponent<ICombatActions> = ({ lastCombatAction }) => {
  return (
    <ActionContainer>
      { lastCombatAction &&
        <Box
          bgcolor={'primary.main'}
          boxShadow={1}
          color={'white'}
          position={'absolute'}
          p={'1rem'}
          top={`-${randomNumberFromRange(200, 300)}px`}
          left={`${randomNumberFromRange(200, 400)}px`}
        >
          <Typography>{lastCombatAction}</Typography>
        </Box>
      }
      <AttackButton />
    </ActionContainer>
  )
}

const mapStateToProps = (state: IRootState) => ({
  lastCombatAction: getLastCombatAction(state)
})

export default connect(mapStateToProps)(CombatActions)
