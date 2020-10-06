import React, { FunctionComponent } from 'react'
import { ToastProvider } from 'react-toast-notifications'
import { CssBaseline } from '@material-ui/core'

import createProvider from './components/Error/ErrorBoundary'
import MainView from './components/MainView'
import rootReducer from './store/rootReducer'
import rootSaga from './store/rootSaga'
import './assets/fonts/fonts.scss'

const AppProvider = createProvider(rootReducer, rootSaga)

const App: FunctionComponent = () => (
  <ToastProvider autoDismiss>
    <AppProvider>
      <CssBaseline />
      <MainView />
    </AppProvider>
  </ToastProvider>
)

export default App
