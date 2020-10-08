import { ActionCreatorWithoutPayload, ActionCreatorWithPayload, createAction, createReducer } from '@reduxjs/toolkit'

export interface ICombatState {
  combatRound: number
  hitPoints: { [key: string]: number }
  playerRolls: { [key: string]: number[] }
  gameOver: IGameOver
  lastCombatAction: string
  roundInProgress: boolean
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

export interface ISetLastCombatAction {
  combatAction: string
}

export interface ISetRoundInProgress {
  roundInProgress: boolean
}

export const incrementCombatRound: ActionCreatorWithoutPayload = createAction('incrementCombatRound')
export const setRoundInProgress: ActionCreatorWithPayload<ISetRoundInProgress> = createAction('setRoundInProgress')
export const initiateCombatRound: ActionCreatorWithPayload<IInitiateCombatRound> = createAction('initiateCombatRound')
export const setLastPlayerRoll: ActionCreatorWithPayload<ISetLastPlayerRoll> = createAction('setLastPlayerRoll')
export const damagePlayer: ActionCreatorWithPayload<IDamagePlayer> = createAction('damagePlayer')
export const setGameOver: ActionCreatorWithPayload<ISetGameOver> = createAction('setGameOver')
export const setLastCombatAction: ActionCreatorWithPayload<ISetLastCombatAction> = createAction('setLastCombatAction')
export const resetGame: ActionCreatorWithoutPayload = createAction('resetGame')

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
  },
  lastCombatAction: null,
  roundInProgress: false
}

const reducer = createReducer(initialState, {
  [incrementCombatRound.type]: (state) => {
    state.combatRound++
  },
  [setRoundInProgress.type]: (state, { payload: { roundInProgress } }) => {
    state.roundInProgress = roundInProgress
  },
  [setLastPlayerRoll.type]: (state, { payload: { playerId, roll } }) => {
    state.playerRolls[playerId].push(roll)
  },
  [damagePlayer.type]: (state, { payload: { playerId, damage } }) => {
    state.hitPoints[playerId] = state.hitPoints[playerId] - damage
  },
  [setGameOver.type]: (state, { payload: { playerWon } }) => {
    state.gameOver = { isOver: true, playerWon }
  },
  [setLastCombatAction.type]: (state, { payload: { combatAction } }) => {
    state.lastCombatAction = combatAction
  },
  [resetGame.type]: (state) => {
    state.hitPoints = initialState.hitPoints
    state.combatRound = initialState.combatRound
    state.playerRolls = initialState.playerRolls
    state.gameOver = initialState.gameOver
    state.lastCombatAction = initialState.lastCombatAction
  }
})

export * from './selectors'
export default reducer
