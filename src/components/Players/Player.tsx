import React, { FunctionComponent } from 'react'
import { Box, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { connect } from 'react-redux'

import { IRootState } from '../../store/rootReducer'
import { Dice, HealthBar } from './'
import { IPlayer, getPlayerHitpointsById, getPlayerById } from '../../store/ducks/players'

const Img = styled('img')({
  maxHeight: '400px',
  maxWidth: '100%'
})

const CharacterContainer = styled('div')({
  maxHeight: '400px',
  maxWidth: '100%'
})

interface IPlayerComp {
  id: string
  currentHitPoints?: number
  player?: IPlayer
}

export const Player: FunctionComponent<IPlayerComp> = ({ player, currentHitPoints = 100 }) => (
  <>
    <Box
      display={'flex'}
      flexDirection={player.isMonster ? 'row' : 'row-reverse'}
    >
      <CharacterContainer>
        <Typography align={player.isMonster ? 'right' : 'left'}>{name}</Typography>
        <Img src={player.img}/>
      </CharacterContainer>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
      >
        <HealthBar value={currentHitPoints} />
        <Dice />
      </Box>
    </Box>
  </>
)

const mapStateToProps = (state: IRootState, props: IPlayerComp) => ({
  player: getPlayerById(props.id)(state),
  currentHitPoints: getPlayerHitpointsById(props.id)(state)
})

export default connect(mapStateToProps)(Player)
