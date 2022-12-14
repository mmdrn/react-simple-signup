import { createSlice } from "@reduxjs/toolkit";

export const appSettings = createSlice({
  name: "appSettings",
  initialState: {
    language: {
      key: "en",
      title: "ðºð¸ English",
      dir: "ltr",
    },
    languages: [
      {
        key: "en",
        title: "ðºð¸ English",
        dir: "ltr",
      },
      {
        key: "fa",
        title: "ð®ð· Persian",
        dir: "rtl",
      },
      {
        key: "tr",
        title: "ð¹ð· TÃ¼rkiye",
        dir: "ltr",
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
