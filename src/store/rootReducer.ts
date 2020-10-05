import { combineReducers } from '@reduxjs/toolkit'

// import mediaReducer, { IUsersState } from './ducks/users'
// import assetGroupsReducer, { ILocationsState } from './ducks/locations'
// import KEYS from './storeKeys'

// export interface IRootState {
//   [KEYS.USERS]: IMediaState
//   [KEYS.LOCATIONS]: IAssetGroupsState
// }

const rootReducer = combineReducers({
  // [KEYS.USERS]: mediaReducer,
  // [KEYS.LOCATIONS]: assetGroupsReducer,
})

export default rootReducer
