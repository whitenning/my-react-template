import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'


// Import modules here
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './app/redux/global'


// Import components here
import App from './app/App'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>  
  </React.StrictMode>,
)
