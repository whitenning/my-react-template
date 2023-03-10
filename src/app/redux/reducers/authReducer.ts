import { createSlice} from '@reduxjs/toolkit'

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
      user: {
        username: null,
        email: null,
        address: null
      },
      userList: []
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload
      },
    
      },
      

    },
  )

  export const { setUser} = authReducer.actions
  export default authReducer.reducer  

