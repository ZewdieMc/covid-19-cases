import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../client/client';

export const fetchCases = createAsyncThunk(
  'covid/fetchCases',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('countries');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

const initialState = {
  cases: [],
  isLoading: true,
  error: '',
};

const covidSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCases.fulfilled, (state, action) => {
      const caseList = action.payload.map((covidCase) => ({
        country: covidCase.country,
        countryInfo: covidCase.countryInfo,
        cases: covidCase.cases,
        deaths: covidCase.deaths,
        recovered: covidCase.recovered,
        critical: covidCase.critical,
      }));
      return ({
        ...state,
        isLoading: false,
        cases: caseList,
      });
    })
      .addCase(fetchCases.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchCases.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
      }));
  },
});

export default covidSlice.reducer;
