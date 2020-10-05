// import { put, takeLatest } from 'redux-saga/effects'

// import { getAssetGroups, IGetAssetGroups } from '../../../api/assetGroups'
// import { fetchAssetGroups, setAssetGroups } from './index'
// import { handleAsyncCall } from '../users/sagas'

// export function* fetchAssetGroupsSaga() {
//   const response: IGetAssetGroups = yield handleAsyncCall(fetchAssetGroups.type, getAssetGroups)
//   yield put(setAssetGroups({ assetGroups: response.content }))
// }

// export default function* () {
//   yield takeLatest(fetchAssetGroups.type, fetchAssetGroupsSaga)
// }
