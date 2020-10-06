import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction, createReducer } from '@reduxjs/toolkit'

export interface ICombatState {
  combatRound: number
  hitPoints: { [key: string]: number }
  playerRolls: { [key: string]: number[] }
  gameOver: IGameOver
}

export interface IGameOver {
  isOver: boolean
  playerWon: boolean | null
}

interface ISetLastPlayerRoll {
  playerId: string
  roll: number
}

export interface IInitiateCombatRound {
  playerIds: string[]
  combatRound: number
}

export interface IDamagePlayer {
  playerId: string
  damage: number
}

export interface ISetGameOver {
  playerWon: boolean
}

export const incrementCombatRound: ActionCreatorWithoutPayload = createAction('incrementCombatRound')
export const initiateCombatRound: ActionCreatorWithPayload<IInitiateCombatRound> = createAction('initiateCombatRound')
export const setLastPlayerRoll: ActionCreatorWithPayload<ISetLastPlayerRoll> = createAction('setLastPlayerRoll')
export const damagePlayer: ActionCreatorWithPayload<IDamagePlayer> = createAction('damagePlayer')
export const setGameOver: ActionCreatorWithPayload<ISetGameOver> = createAction('setGameOver')

const initialState: ICombatState = {
  hitPoints: {
    1: 100,
    2: 100
  },
  combatRound: -1,
  playerRolls: {
    1: [],
    2: []
  },
  gameOver: {
    isOver: false,
    playerWon: null
  }
}

const reducer = createReducer(initialState, {
  [incrementCombatRound.type]: (state) => {
    state.combatRound++
  },
  [setLastPlayerRoll.type]: (state, { payload: { playerId, roll } }) => {
    state.playerRolls[playerId].push(roll)
  },
  [damagePlayer.type]: (state, { payload: { playerId, damage } }) => {
    state.hitPoints[playerId] = state.hitPoints[playerId] - damage
  },
  [setGameOver.type]: (state, { payload: { playerWon } }) => {
    state.gameOver = { isOver: true, playerWon }
  }
})

export * from './selectors'
export default reducer
