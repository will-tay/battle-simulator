import { all } from 'redux-saga/effects'

// import mediaSaga from './ducks/media/sagas'
// import assetGroupsSaga from './ducks/locations/sagas'

export default function * () {
  yield all([
    // mediaSaga(),
    // assetGroupsSaga()
  ])
}
