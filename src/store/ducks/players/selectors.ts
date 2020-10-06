import { createSelector } from '@reduxjs/toolkit'

import { IRootState } from '../../rootReducer'
import KEYS from '../../storeKeys'

const playersSelector = (state: IRootState) => state[KEYS.PLAYERS]

export const getPlayerById = (id: string) => createSelector(
  playersSelector,
  (state) => state.playersById[id]
)

export const getAllPlayers = createSelector(
  playersSelector,
  (state) => state.playersById
)

export const getPlayerIds = createSelector(
  playersSelector,
  (state) => state.listOfIds
)
