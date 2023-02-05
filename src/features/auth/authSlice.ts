import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncPostRequestUnauthorized } from "../../app/webUtils";

export interface IdentityState {
  token?: string;
  loading: boolean;
}

const initialState: IdentityState = {
  token: undefined,
  loading: false,
}

export const login = createAsyncThunk(
  'identity/login',
  async (credentials: {username: string, password: string}) => {
    const response = await asyncPostRequestUnauthorized(credentials.username, credentials.password);

    return response;
  },
)

export const identitySlice = createSlice({
  name: 'identity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    }).addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.token = action.payload?.access_token ?? '123456kajshd';
    }).addCase(login.rejected, (state) => {
      state.loading = false;
    })
  }
})

export default identitySlice.reducer