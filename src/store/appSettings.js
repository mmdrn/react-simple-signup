import { createSlice } from "@reduxjs/toolkit";

export const appSettings = createSlice({
  name: "appSettings",
  initialState: {
    language: "en",
    languages: [
      {
        key: "en",
        title: "🇺🇸 English",
      },
      {
        key: "fa",
        title: "🇮🇷 Persian",
      },
      {
        key: "tr",
        title: "🇹🇷 Türkiye",
      },
    ],
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = appSettings.actions;

export default appSettings.reducer;
