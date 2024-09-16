import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage, getFromLocalStorage } from "../utils";
const initialState = {
  selectedCountries: getFromLocalStorage('selectedCountries') || []
};

export const selectedCountriesSlice = createSlice({
  name: 'selectedCountries',
  initialState,
  reducers: {
    CountrySelection: (state, action) => {
      const selectedCountry = action.payload;
      const isSelected = state.selectedCountries.some(
        (country) => country.cca2 === selectedCountry.cca2
      );

      if (isSelected) {
        state.selectedCountries = state.selectedCountries.filter(
          (country) => country.cca2 !== selectedCountry.cca2
        );
      } else {
        state.selectedCountries.push(selectedCountry);
      }

      
      saveToLocalStorage('selectedCountries', state.selectedCountries);
    }
  }
});

export default selectedCountriesSlice.reducer;
export const {CountrySelection } = selectedCountriesSlice.actions;