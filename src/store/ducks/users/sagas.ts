// import { put, call } from 'redux-saga/effects'

// import { setReqeustPending, setRequestError } from '.'

// export function* handleAsyncCall(key: string, method: any, ...methodParams: Array<any>) {
//   yield put(setReqeustPending({ key, pending: true }))
//   let res
//   try {
//     res = yield call(method, ...methodParams)
//   } catch (e) {
//     yield put(setRequestError({ key, error: e.message }))
//     yield put(setReqeustPending({ key, pending: false }))
//     throw e
//   }
//   yield put(setReqeustPending({ key, pending: false }))
//   return res
// }
