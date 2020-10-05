import React, { FunctionComponent } from 'react'
// import TagManager from 'react-gtm-module'
import { ToastProvider } from 'react-toast-notifications'

import createProvider from './components/Error/ErrorBoundary'
import MainView from './components/MainView'
import rootReducer from './store/rootReducer'
import rootSaga from './store/rootSaga'

// const tagManagerArgs = {
//   gtmId: ''
// }

const AppProvider = createProvider(rootReducer, rootSaga)

// TagManager.initialize(tagManagerArgs)

const App: FunctionComponent = () => (
  <ToastProvider autoDismiss>
    <AppProvider>
      <MainView />
    </AppProvider>
  </ToastProvider>
)

export default App
