import React, { FunctionComponent } from 'react'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { IRootState } from '../store/rootReducer'
import { Player } from './Players'
import { CombatActions, GameOver } from './Combat'
import { getPlayerIds } from '../store/ducks/players'

interface IMainView {
  playerIds: string[]
}

const TitleText = styled(Typography)`
  font-family: 'OptimusPrincepsSemiBold';
  margin-bottom: 4rem;
`

const MainView: FunctionComponent<IMainView> = ({ playerIds }) => (
  <Box
    display={'flex'}
    alignItems={'center'}
    height={'100vh'}
    bgcolor={'#f9f9f9'}
  >
    <Container
      maxWidth={'lg'}
    >
      <TitleText
        align={'center'}
        variant={'h1'}
      >
        BATTLE SIMULATOR
      </TitleText>
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
