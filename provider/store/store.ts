import {configureStore} from "@reduxjs/toolkit"
import { promptSlice } from "./features/promptSlice"
export const store = configureStore({
    reducer:{
        [promptSlice.name]:promptSlice.reducer
    }
})