import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import selectedCountriesReducer from './selectedCountriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    selectedCountries: selectedCountriesReducer,
  },
});

export default store;
