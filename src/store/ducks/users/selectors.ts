// import { createSelector } from '@reduxjs/toolkit'

// import { IRootState } from '../../rootReducer'
// import KEYS from '../../storeKeys'

// export interface IRequestStatus {
//   isPending: boolean
//   error: string
// }

// export interface IRequestError {
//   [key: string]: string
// }

// const apiRequestsStatuses = (state: IRootState) => state[KEYS.API_REQUESTS_STATUSES]

// export const getRequestStatus = (key: string) => createSelector(
//   apiRequestsStatuses,
//   (state): IRequestStatus => ({
//     isPending: Boolean(state.pending[key]),
//     error: state.error[key]
//   })
// )

// export const getRequestErrors = () => createSelector(
//   apiRequestsStatuses,
//   (state) => state.error
// )
