import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storeConfig from './app/redux/store'
import Navigation from './app/navigation'
import Loading from './app/component/loading'

const { store, persistor } = storeConfig()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate Loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App;
