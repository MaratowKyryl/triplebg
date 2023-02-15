import { dummyData, IDataState } from "./dummy-data";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { asyncGetRequestAuthorized } from "../../app/webUtils";

export interface IData {
  data?: IDataState[];
  loading: boolean;
}

const initialState: IData = {
  data: undefined,
  loading: false,
}

export const getData = createAsyncThunk(
  'data/getData',
  async (token: string) => {
    const response = await asyncGetRequestAuthorized(token);

    return response;
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    }).addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload ?? dummyData;
    }).addCase(getData.rejected, (state) => {
      state.loading = false;
    })
  }
});

export default dataSlice.reducer;