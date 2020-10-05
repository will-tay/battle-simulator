import { configureStore, getDefaultMiddleware, ConfigureStoreOptions } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({
  thunk: false,
  serializableCheck: {
    ignoredActions: ['uploadRequest', 'addUploadPlaceholders']
  }
}), sagaMiddleware]

export const getStore = (overrides: Partial<ConfigureStoreOptions> = {}) => configureStore({
  reducer: rootReducer,
  middleware,
  ...overrides
})
const defaultStore = getStore()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    defaultStore.replaceReducer(newRootReducer)
  })
}
sagaMiddleware.run(rootSaga)

export default defaultStore
