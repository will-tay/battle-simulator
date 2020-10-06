import { createReducer } from '@reduxjs/toolkit'
import { monsterImg, humanImg } from '../../../assets'

export interface IPlayer {
  id: string
  maxHp: number
  isMonster: boolean
  name: string
  img: string
}

export interface IPlayersById {
  [key: string]: IPlayer
}

export interface IPlayersState {
  playersById: IPlayersById
  listOfIds: string[]
}

const initialState = {
  playersById: {
    1: {
      id: 1,
      maxHp: 100,
      isMonster: false,
      name: 'Player',
      img: humanImg
    },
    2: {
      id: 2,
      maxHp: 100,
      isMonster: true,
      name: 'Basilisk',
      img: monsterImg
    }
  },
  listOfIds: ['1', '2']
}

const reducer = createReducer(initialState, {
})

export * from './selectors'
export default reducer
