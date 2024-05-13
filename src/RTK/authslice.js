import { createSlice } from "@reduxjs/toolkit";


const authslice = createSlice({
    name:'auth',
    initialState: { islogedin: false, name: "Mahmoud Mohammed" },
    reducers: {
        LogOnOut: (state) => {
            state.islogedin = !state.islogedin
        }
    }
})

export const {LogOnOut} = authslice.actions; 
export default authslice.reducer;