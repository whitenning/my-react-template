import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

// Import modules here
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './app/redux/global'
import { DAppProvider, Config } from '@usedapp/core'

// Import components here
import App from './app/App'




// Dapp confing
const config: Config = {
  
}



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <DAppProvider config={config}>
           <App />
           </DAppProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
