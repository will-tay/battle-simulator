import React, { FunctionComponent } from 'react'
import { Box, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { IRootState } from '../../store/rootReducer'
import { HealthBar } from './'
import { Dice } from '../Combat'
import { IPlayer, getPlayerById } from '../../store/ducks/players'
import { getHitpointsByPlayerId } from '../../store/ducks/combat'

interface IPlayerComp {
  id: string
  currentHitPoints?: number
  player?: IPlayer
}

const Img = styled.img`
  max-height: 400px;
  max-width: 100%;
`

const CharacterContainer = styled.div`
  max-height: 400px;
  max-width: 100%;
`

const PlayerHealthBar = styled(HealthBar)`
  margin-bottom: auto;
`

export const Player: FunctionComponent<IPlayerComp> = ({ player, currentHitPoints = 100 }) => (
  <>
    <Box
      display={'flex'}
      flexDirection={player.isMonster ? 'row' : 'row-reverse'}
      justifyContent={'center'}
    >
      <CharacterContainer>
        <Typography align={player.isMonster ? 'right' : 'left'}>{name}</Typography>
        <Img src={player.img}/>
      </CharacterContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        minWidth={'130px'}
      >
        <PlayerHealthBar value={currentHitPoints} />
        <Dice
          playerId={player.id}
        />
      </Box>
    </Box>
  </>
)

const mapStateToProps = (state: IRootState, props: IPlayerComp) => ({
  player: getPlayerById(props.id)(state),
  currentHitPoints: getHitpointsByPlayerId(props.id)(state)
})

export default connect(mapStateToProps)(Player)
