import React, { FunctionComponent } from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import { IRootState } from '../store/rootReducer'
import { Player, CombatActions } from './Players'
import { getPlayerIds } from '../store/ducks/players'
import { GameOver } from './GameOver'

interface IMainView {
  playerIds: string[]
}

const MainView: FunctionComponent<IMainView> = ({ playerIds }) => (
  <Box
    display={'flex'}
    alignItems={'center'}
    height={'100vh'}
  >
    <Container
      maxWidth={'md'}
    >
      <Typography
        align={'center'}
        variant={'h1'}
      >
        BATTLE SIMULATOR
      </Typography>
      <Grid
        container
        justify={'center'}
        spacing={6}
      >
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
        <Grid
          item
          xs={12}
        >
          <CombatActions />
        </Grid>
      </Grid>
      <GameOver />
    </Container>
  </Box>
)

const mapStateToProps = (state: IRootState) => ({
  playerIds: getPlayerIds(state)
})

export default connect(mapStateToProps)(MainView)
