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
              password: {
                title: "Password",
                error:
                  "The Password must have: \n&#8226; At least one upper case letter\n&#8226; At least one lower case letter\n&#8226; At least one digit\n&#8226; At least one special character\n&#8226; Minimum eight in length",
              },
              repeatPassword: {
                title: "Repeat Password",
                error: "The Repeat Password must be equal to the Password.",
              },
              address: {
                title: "Address",
                error: "The address can't be less than {{value}} characters.",
              },
              email: {
                title: "Email",
                error: "The Email format is not valid.",
              },
              phoneNumber: {
                title: "Phone Number",
                error: "The Phone Number format is not valid.",
              },
              passportNumber: {
                title: "Passport Number",
                error: "The Passport Number format is not valid.",
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
              password: {
                title: "کلمه عبور",
                error:
                  "کلمه عبور باید شامل موارد زیر باشد: \n&#8226; حداقل یک حرف بزرگ انگلیسی\n&#8226; حداقل یک حرف کوچک انگلیسی\n&#8226; حداقل یک عدد\n&#8226; حداقل یک کاراکتر ویژه\n&#8226; حداقل دارای ۸ کاراکتر",
              },
              repeatPassword: {
                title: "تکرار کلمه عبور",
                error: "تکرار کلمه عبور باید برابر با کلمه عبور باشد.",
              },
              address: {
                title: "آدرس",
                error: "آدرس نمی‌تواند کم‌تر از {{value}} حرف باشد.",
              },
              email: {
                title: "ایمیل",
                error: "فرمت ایمیل معتبر نمی‌باشد.",
              },
              phoneNumber: {
                title: "شماره موبایل",
                error: "فرمت شماره موبایل معتبر نمی‌باشد.",
              },
              passportNumber: {
                title: "شماره پاسپورت",
                error: "فرمت شماره پاسپورت معتبر نمی‌باشد.",
              },
            },
          },
        },
      },
      tr: {
        translation: {
          signup: {
            title: "Üye olmak",
            subtitle: "Lütfen bilgilerinizi giriniz.",
            form: {
              name: {
                title: "İsim",
                errors: {
                  minLength:
                    "Ad {{value}} karakterden az olamaz.",
                  maxLength:
                    "Ad {{value}} karakterden fazla olamaz.",
                },
              },
              family: {
                title: "Aile",
                errors: {
                  minLength:
                    "Aile {{value}} karakterden az olamaz.",
                  maxLength:
                    "Aile {{value}} karakterden fazla olamaz.",
                },
              },
              password: {
                title: "Şifre",
                error:
                  "Şifrenin olması gerekir: \n&#8226; En az bir büyük harf\n&#8226; En az bir küçük harf\n&#8226; En az bir rakam\n&#8226; En az bir özel karakter\n&#8226; En az sekiz uzunluk",
              },
              repeatPassword: {
                title: "Şifreyi tekrar girin",
                error: "Tekrar Şifresi Şifreye eşit olmalıdır.",
              },
              address: {
                title: "Adres",
                error: "Adres {{value}} karakterden az olamaz.",
              },
              email: {
                title: "E-posta",
                error: "E-posta biçimi geçerli değil.",
              },
              phoneNumber: {
                title: "Telefon numarası",
                error: "Telefon Numarası biçimi geçerli değil.",
              },
              passportNumber: {
                title: "Pasaport numarası",
                error: "Pasaport Numarası biçimi geçerli değil.",
              },
            },
          },
        },
      },
    },
  });
