import { all } from 'redux-saga/effects'

import combatSaga from './ducks/combat/sagas'

export default function * () {
  yield all([
    combatSaga()
  ])
}
