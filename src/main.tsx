import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.scss'
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './app/redux/global'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>  
  </React.StrictMode>,
)
