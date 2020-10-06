import { PayloadAction } from '@reduxjs/toolkit'
import { put, all, takeLatest, select } from 'redux-saga/effects'

import { getPlayerIds, getPlayerById, IPlayer } from '../players/'
import { setLastPlayerRoll, initiateCombatRound, IInitiateCombatRound, damagePlayer, setGameOver } from './index'
import { getCombatRound, getCombatRoundRolls, getHitpointsByPlayerId } from './selectors'

export function* playerRollsSaga() {
  const [playerIds, combatRound]: ([string[], number]) = yield all([
    select(getPlayerIds),
    select(getCombatRound)
  ])
  const rolls = yield all(playerIds.map((playerId) => select(getCombatRoundRolls(playerId, combatRound))))
  if (rolls.every((roll: number) => roll !== undefined)) yield put(initiateCombatRound({ playerIds, combatRound }))
}

export function* combatRoundSaga(action: PayloadAction<IInitiateCombatRound>) {
  const rollsByPlayerId: { playerId: string, rolls: number }[] = []
  for (const playerId of action.payload.playerIds) rollsByPlayerId.push({ playerId, rolls: yield select(getCombatRoundRolls(playerId, action.payload.combatRound)) })
  const sortedRolls = rollsByPlayerId.slice().sort((a, b) => a.rolls - b.rolls)
  const highestRoll = sortedRolls[sortedRolls.length - 1]
  const lowestRoll = sortedRolls[0]
  if (highestRoll.rolls !== lowestRoll.rolls) {
    const damage = (highestRoll.rolls - lowestRoll.rolls) + 50
    const [player, hitpoints]: ([IPlayer, number]) = yield all([
      select(getPlayerById(lowestRoll.playerId)),
      select(getHitpointsByPlayerId(lowestRoll.playerId))
    ])
    if (hitpoints - damage < 1) {
      yield put(setGameOver({ playerWon: player.isMonster }))
    }
    yield put(damagePlayer({ playerId: lowestRoll.playerId, damage }))
  } else {
    console.log('NOBODY GOT HURT')
  }
}

export default function* () {
  yield takeLatest(setLastPlayerRoll.type, playerRollsSaga)
  yield takeLatest(initiateCombatRound.type, combatRoundSaga)
}
