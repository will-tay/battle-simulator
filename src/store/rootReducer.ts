import { combineReducers } from '@reduxjs/toolkit'

import playersReducer, { IPlayersState } from './ducks/players'
import combatReducer, { ICombatState } from './ducks/combat'
import KEYS from './storeKeys'

export interface IRootState {
  [KEYS.PLAYERS]: IPlayersState
  [KEYS.COMBAT]: ICombatState
}

const rootReducer = combineReducers({
  [KEYS.PLAYERS]: playersReducer,
  [KEYS.COMBAT]: combatReducer
})

export default rootReducer
