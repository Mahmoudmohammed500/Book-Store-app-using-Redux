import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InsrtLogs } from "./reportslice";
export const fetchbooks = createAsyncThunk("bookslice/fetchbooks", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch('https://json-server-for-book-store-app.onrender.com/books');// local url is http://localhost:9000/books
        const data = await res.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const insertbook = createAsyncThunk("bookslice/insertbook", async (bookdata, thunkAPI) => {
    const { rejectWithValue, getState,dispatch } = thunkAPI
    try {
        bookdata.username = getState().auth.name;
        const res = await fetch("https://json-server-for-book-store-app.onrender.com/books", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookdata)
        })
        dispatch(InsrtLogs({name:"InsertBooks" , status: "Success" }))
        const data = await res.json();
        return data;
    } catch (error) {
        dispatch(InsrtLogs({name:"InsertBooks" , status: "Failed" }))
        return rejectWithValue(error.message);
    }
})

export const deletebook = createAsyncThunk("bookslice/deletebook", async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        await fetch(`https://json-server-for-book-store-app.onrender.com/books/${item.id}`, {
            method: "delete",
            Headers: {
                "Content-type": "Aplication/json"
            }
      
        })
        // const data = await res.json();
        // return data;   
        // We hash the previous 2 statements because no response from this server so we use the next statement instead
        return item;
   
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


const bookslice = createSlice({
    name: 'bookslice',
    initialState: {
        books: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // FetchBooks methods
        builder.addCase(fetchbooks.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchbooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.isLoading = false;
            // return action.payload;    this statement get an error 
        });
        builder.addCase(fetchbooks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        // InsertBook methods
        builder.addCase(insertbook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(insertbook.fulfilled, (state, action) => {
            const bookclone = { ...action.payload }
            state.books.push(bookclone);
            state.isLoading = false;
            // return action.payload;    this statement get an error 
        });
        builder.addCase(insertbook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        // Deletebook methods
        builder.addCase(deletebook.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deletebook.fulfilled, (state, action) => {
            state.isLoading = false;
            state.books = state.books.filter((book) => book.id != action.payload.id )
            // return action.payload;    this statement get an error 
        });
        builder.addCase(deletebook.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const { } = bookslice.actions;
export default bookslice.reducer;