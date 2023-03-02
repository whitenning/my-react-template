
import React from 'react'
import './App.scss'


// Import modules here
import { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import { useEthers } from '@usedapp/core'

// Import actions here
import {isWeb3, setWallet } from './redux/reducers/authReducer'

// Import components here
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';


declare global {
  interface Window {
    ethereum: any;
  }
}




function App() {

  const { account } = useEthers()
  const dispatch = useDispatch()

  
  useEffect(() => {
     dispatch(isWeb3())
    if(window.ethereum !== 'undefined'){
      dispatch(isWeb3())
      if(account){
        dispatch(setWallet(account))
      } else {
          // try to connect to wallet
        //  activateBrowserWallet()
      }
     
    }
  }, [dispatch, account]);


  return (
  <>
   <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/user/:address' element={<UserPage />} />
   </Routes>
   </>
  )
}

export default App
