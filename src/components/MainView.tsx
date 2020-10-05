import React, { FunctionComponent } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import { IRootState } from '../store/rootReducer'
import { Player } from './Players'
import { AttackButton } from './Buttons'
import { getPlayerIds } from '../store/ducks/players'

interface IMainView {
  playerIds: string[]
}

const MainView: FunctionComponent<IMainView> = ({ playerIds }) => (
  <Container
    maxWidth={'md'}
  >
    <Typography align={'center'}>BATTLE SIMULATOR</Typography>
    <Grid container justify={'center'}>
      {playerIds.map(playerId => (
        <Grid
          key={`player_${playerId}`}
          item
          sm={6}
          xs={12}
        >
          <Player id={playerId} />
        </Grid>
      ))}
      <Grid item>
        <AttackButton />
      </Grid>
    </Grid>
  </Container>
)

const mapStateToProps = (state: IRootState) => ({
  playerIds: getPlayerIds(state)
})

export default connect(mapStateToProps)(MainView)
