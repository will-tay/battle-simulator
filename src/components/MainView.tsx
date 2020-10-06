import React, { FunctionComponent } from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import { IRootState } from '../store/rootReducer'
import { Player } from './Players'
import { AttackButton } from './Buttons'
import { getPlayerIds } from '../store/ducks/players'
import { getGameOver, IGameOver } from '../store/ducks/combat'
import { GameOver } from './GameOver'

interface IMainView {
  playerIds: string[]
  gameOver: IGameOver
}

const MainView: FunctionComponent<IMainView> = ({ playerIds, gameOver }) => (
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
      <GameOver
        isOver={gameOver.isOver}
        text={gameOver.playerWon ? 'YOU WIN!' : 'YOU DIED'}
      />
    </Container>
  </Box>
)

const mapStateToProps = (state: IRootState) => ({
  playerIds: getPlayerIds(state),
  gameOver: getGameOver(state)
})

export default connect(mapStateToProps)(MainView)
