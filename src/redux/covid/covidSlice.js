import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../client/client';

const fetchCases = createAsyncThunk(
  'covid/fetchCases',
  async (_, thunkAPI) => {
    try {
      const response = client.get('countries');
      return response.data;//
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Cannot fetch covid data' });
    }
  },
);

const initalState  = {
    cases: [],
    isLoading: false,
    error:'',
}

const covidSlice = createSlice({
    name: 'covid',
    initalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchCases.fulfilled, (state, action) => {
                const caseList = action.payload.slice(0,12).map(
                    (case) => ({
                        country: case.country,
                        countryInfo: case.countryInfo,
                        cases: case.cases,
                        deaths: case.deaths,
                        recovered: case.recovered,
                        active: case.active
                    })
                );
            }
        )
    }
});