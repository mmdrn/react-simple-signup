import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { setLanguage } from "./store/appSettings";

export default function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLanguage = useSelector((state) => state.appSettings.language);
  const languages = useSelector((state) => state.appSettings.languages);

  dispatch(setLanguage(languages.find((l) => l.key === i18n.resolvedLanguage)));

  return (
    <div className="App" dir={currentLanguage.dir}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
