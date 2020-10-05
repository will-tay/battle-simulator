import React, { Component } from 'react'
import styled from 'styled-components'
import { configureStore, getDefaultMiddleware, ConfigureStoreOptions } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { Typography } from 'bdx-af-ui/core'

interface IErrorBoundaryProps {
  children: React.ReactNode
  store?: any
}

interface IErrorBoundaryState {
  error: any
}

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
`

const ErrorMessage = styled(Typography)`
  margin-top: 2rem;
`

const createProvider = (reducer: any, saga: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: ['uploadRequest', 'addUploadPlaceholders']
    }
  }), sagaMiddleware]

  class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    private store: any
    private defaultStore: any
    constructor(props: IErrorBoundaryProps) {
      super(props)
      this.state = { error: null }
      this.showError = this.showError.bind(this)
      const catchingReducer = (state: any, action: any) => {
        try {
          return reducer(state, action)
        } catch (error) {
          // error in reducer
          this.showError(error)
          return state
        }
      }
      this.store = (overrides: Partial<ConfigureStoreOptions> = {}) => configureStore({
        reducer: catchingReducer,
        middleware,
        ...overrides
      })
      this.defaultStore = this.store()
      const sagaTask = sagaMiddleware.run(saga).toPromise()
      sagaTask.catch(this.showError)
    }

    showError (error: Error) {
      this.setState({ error })
    }

    componentDidCatch(error: Error) {
      this.showError(error)
    }

    render() {
      const { error } = this.state
      if (error) {
        return (
          <ErrorMessageContainer data-testid='error-message-container'>
            <Typography variant='body1'>Unexpected error - please refresh your browser</Typography>
            <Typography variant='body1'>If the problem persists contact an administrator.</Typography>
            <ErrorMessage data-testid='error-message'>Error: <strong>{error.message}</strong></ErrorMessage>
          </ErrorMessageContainer>
        )
      }
      return <Provider {...this.props} store={this.defaultStore} />
    }
  }
  return ErrorBoundary
}

export default createProvider
