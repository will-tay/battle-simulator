import React, { FunctionComponent } from 'react'
import { ToastProvider } from 'react-toast-notifications'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { red, deepPurple } from '@material-ui/core/colors'

import createProvider from './components/Error/ErrorBoundary'
import MainView from './components/MainView'
import rootReducer from './store/rootReducer'
import rootSaga from './store/rootSaga'
import './assets/fonts/fonts.scss'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: red
  }
})

const AppProvider = createProvider(rootReducer, rootSaga)

const App: FunctionComponent = () => (
  <ToastProvider autoDismiss>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <CssBaseline />
        <MainView />
      </AppProvider>
    </ThemeProvider>
  </ToastProvider>
)

export default App
