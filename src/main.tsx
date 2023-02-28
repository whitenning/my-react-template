import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './app/redux/global'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
        <Provider store={store}>

      <App />
     
      </Provider>
      </BrowserRouter>
 
  </React.StrictMode>,
)
