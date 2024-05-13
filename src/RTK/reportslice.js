import { createSlice } from "@reduxjs/toolkit";

const reportslice = createSlice({
    name: "report",
    initialState: {logs : []},
    reducers:{
        InsrtLogs: (state , action) => {
            state.logs.push(action.payload);
        }
    }
})
export const {InsrtLogs} = reportslice.actions;
export default reportslice.reducer;