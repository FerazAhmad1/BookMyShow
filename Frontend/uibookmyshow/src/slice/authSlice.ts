import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { type SignupProps, type LoginData } from "../types/types"
const stored = localStorage.getItem("auth");

const initialState = stored
    ? JSON.parse(stored)
    : {
        loading: false,
        user: null,
        token: "",
        error: null
    };

export const signupUser = createAsyncThunk("auth/signup", async (data: SignupProps) => {

    const response = await axios.post("http://localhost:3000/api/v1/user/signup", data);
    return response.data



})
export const loginUser = createAsyncThunk("auth/login", async (data: LoginData) => {
    console.log("data", data)
    const response = await axios.post("http://localhost:3000/api/v1/user/login", data);
    console.log("response", response)
    return response.data
})
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.loading = false
            const { token, user } = action.payload;
            state.error = null;
            state.user = user
            state.token = token
            localStorage.setItem("auth", JSON.stringify({
                loading: state.loading,
                user: state.user,
                token: state.token,
                error: state.error
            }))

        })
        builder.addCase(signupUser.rejected, (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        })

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            const { token, user } = action.payload;
            console.log(token, user, "LLLLLLL")
            state.error = null;
            state.user = user
            state.token = token
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log(action, "ddddddddd")
            state.loading = false
            state.data = null
            state.error = action.payload
        })
    }


}
);


export default authSlice.reducer