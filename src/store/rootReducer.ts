import { combineReducers } from '@reduxjs/toolkit'

import playersReducer, { IPlayersState } from './ducks/players'
import KEYS from './storeKeys'

export interface IRootState {
  [KEYS.PLAYERS]: IPlayersState
}

const rootReducer = combineReducers({
  [KEYS.PLAYERS]: playersReducer
})

export default rootReducer
