import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          signup: {
            title: "Sign up",
            subtitle: "Please enter your details.",
            form: {
              name: {
                title: "Name",
                errors: {
                  minLength:
                    "The Name can't be less than {{value}} characters.",
                  maxLength:
                    "The Name can't be more than {{value}} characters.",
                },
              },
              family: {
                title: "Family",
                errors: {
                  minLength:
                    "The Family can't be less than {{value}} characters.",
                  maxLength:
                    "The Family can't be more than {{value}} characters.",
                },
              },
            },
          },
        },
      },
      fa: {
        translation: {
          signup: {
            title: "ایجاد حساب کاربری",
            subtitle: "لطفا اطلاعات خود را وارد کنید.",
            form: {
              name: {
                title: "نام",
                errors: {
                  minLength: "نام نمی‌تواند کم‌تر از {{value}} حرف باشد.",
                  maxLength: "نام نمی‌تواند بیشتر از {{value}} حرف باشد.",
                },
              },
              family: {
                title: "نام خانوادگی",
                errors: {
                  minLength:
                    "نام خانوادگی نمی‌تواند کم‌تر از {{value}} حرف باشد.",
                  maxLength:
                    "نام خانوادگی نمی‌تواند بیشتر از {{value}} حرف باشد.",
                },
              },
            },
          },
        },
      },
    },
  });
