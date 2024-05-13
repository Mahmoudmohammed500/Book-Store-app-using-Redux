import { configureStore } from "@reduxjs/toolkit";
import bookslice from "./bookslice";
import authslice from "./authslice";
import reportslice from "./reportslice";


export const store = configureStore (
    {
        reducer:{
            books:bookslice,
            auth:authslice,
            report:reportslice
        }
    }
)