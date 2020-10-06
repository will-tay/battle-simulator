import { createSelector } from '@reduxjs/toolkit'

import { IRootState } from '../../rootReducer'
import KEYS from '../../storeKeys'

const combatSelector = (state: IRootState) => state[KEYS.COMBAT]

export const getHitpointsByPlayerId = (id: string) => createSelector(
  combatSelector,
  (state) => state.hitPoints[id]
)

export const getCombatRound = createSelector(
  combatSelector,
  (state) => state.combatRound
)

export const getCombatRoundRolls = (playerId: string, round: number) => createSelector(
  combatSelector,
  (state) => state.playerRolls[playerId][round]
)

export const getIsOver = createSelector(
  combatSelector,
  (state) => state.gameOver.isOver
)

export const getGameOver = createSelector(
  combatSelector,
  (state) => state.gameOver
)
