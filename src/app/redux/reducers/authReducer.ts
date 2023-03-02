
import { createSlice, createAction } from '@reduxjs/toolkit'

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
      web3: false,
      wallet:'',
      user: {
        username: null,
        email: null,
        address: null
      },
      userList: []
    },
    reducers: {
      isWeb3: (state) => {
           state.web3 = true
        },
      setWallet: (state, action) => {
            state.wallet = action.payload
         },
      setUser: (state, action) => {
        state.user = action.payload
      },
      setUserList: (state, action) => {
        state.userList = action.payload
      },
  
     
      },
      

    },
  )

  export const { isWeb3, setWallet, setUserList, setUser} = authReducer.actions
  export default authReducer.reducer  

