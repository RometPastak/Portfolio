import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      /* Sidebar */
        "home_page": "Home page",
        "about_me": "About me",
        "portfolio": "My projects",
        "contact": "Contact",

        /* Main Page */
        "mainpage_hello": "Hello, I am",
        "mainpage_developer": "Developer",
        "mainpage_myinfo": "From this website you can find information about:",
        "mainpage_hobbies": "My hobbies and intrests",
        "mainpage_employee": "What kind of employee I am",
        "mainpage_whystarted": "How and why I started programming",
        "mainpage_skills": "My skills and experience in IT field",
        "mainpage_projects": "Completed and future works",
        "mainpage_contactme": "Ways to contact me",
        "mainpage_mycv": "Download CV",

        /* About Me */
        "aboutme_hobbies1": "In my free time, I enjoy participating in sports, acquire new knowledge on web design, play computer games, and spend time with my family and friends.",
        "aboutme_hobbies2": "Right now, my hobbies include playing soccer, rock climbing, snowboarding, and exercising at the gym. However, I also enjoy learning new programming languages on occasion.",
        "aboutme_employee1": "As a worker, I am capable of being both self-sufficient and a team player. When encountering a problem, I first try to resolve it myself, searching for answers from previous projects or the internet.",
        "aboutme_employee2": "Throughout my life, I have learned teamwork through various team sports and also through military service. I can be a very good subordinate, but also excel in a leadership role.",
        "aboutme_whystarted1": "I began programming at the age of 14 when I became fascinated by a computer game and started creating my own game servers. As a result, I started learning web design and database use aswell.",
        "aboutme_whystarted2": "A large part of my knowledge has been acquired through self-study, such as by watching videos or experimenting. I have also taken courses, for example in React and JavaScript.",
        "aboutme_myskills": "My skills",
        "aboutme_advanced": "Advanced",
        "aboutme_intermediate": "Intermediate",
        "aboutme_basic": "Basic",

        /* Portfolio */
        "portfolio_website": "Website",
        "portfolio_portfolio": "Portfolio",

        /* Contact */
        "contact_myinfo": "My information",
        "contact_contactme": "Contact me",
        "contact_sendletter": "Send me a letter",
        "contact_replywithin": "I will reply within 24 hours",
        "contact_name": "Name",
        "contact_email": "E-mail address",
        "contact_message": "Message",
        "contact_send": "Send"
    }
  },
  ee: {
    translation: {
        /* Sidebar */
        "home_page": "Avaleht",
        "about_me": "Minust",
        "portfolio": "Minu tööd",
        "contact": "Kontakt",

        /* Main Page */
        "mainpage_hello": "Tere, mina olen",
        "mainpage_developer": "Arendaja",
        "mainpage_myinfo": "Sellelt veebisaidilt leiate te informatsiooni järgneva kohta:",
        "mainpage_hobbies": "Minu hobid ja huvid",
        "mainpage_employee": "Milline töötaja ma olen",
        "mainpage_whystarted": "Kuidas ja miks ma alustasin programmeerimisega",
        "mainpage_skills": "Minu oskused ja kogemused IT valdkonnas",
        "mainpage_projects": "Tehtud ja tulevased tööd",
        "mainpage_contactme": "Minuga kontakteerumise võimalused",
        "mainpage_mycv": "Laadi alla CV",

        /* About Me */
        "aboutme_hobbies1": "Mulle meeldib vabal ajal tegeleda spordiga, õppida uusi teadmisi veebidisaini kohta, mängida arvutimänge ja veeta aega oma pere ning sõprade seltskonnas.",
        "aboutme_hobbies2": "Hetkel minu hobid, mida harrastan on jalgpall, ronimine, lumelauaga sõitmine ja jõusaalis treenimine. Kuid ühtlasi meeldib mulle ka vahest õppida uusi programmeerimiskeeli.",
        "aboutme_employee1": "Ma suudan töötajana olla nii iseseisev kui ka meeskonnamängija. Probleemile sattudes asun seda esmalt ise lahendama, otsides vastuseid varasematest projektidest või internetiavarustest.",
        "aboutme_employee2": "Tiimi koostööd olen õppinud elu jooksul erinevatest meeskonnamängudest ja ka Kaitseväest. Suudan olla väga hea alluv, aga samas ka täita suurepäraselt juhirolli.",
        "aboutme_whystarted1": "Ma alustasin programmeerimisega juba 14-aastasena, kui mulle hakkas meeldima arvutimäng, kuhu lõin oma mänguserverid. Tänu sellele hakkasin õppima ka veebidisaini ja andmebaaside kasutamist.",
        "aboutme_whystarted2": "Suure osa oma teadmistest olen õppinud iseseisvalt, vaadates erinevaid videosid või katse-eksituse meetodil. Ühtlasi on läbitud ka koolitusi, näiteks React-i ja JavaScripti alal.",
        "aboutme_myskills": "Minu oskused",
        "aboutme_advanced": "Edasijõudnud",
        "aboutme_intermediate": "Kesktase",
        "aboutme_basic": "Baasteadmised",

        /* Portfolio */
        "portfolio_website": "Veebisait",
        "portfolio_portfolio": "Portfoolio",

        /* Contact */
        "contact_myinfo": "Minu andmed",
        "contact_contactme": "Võta ühendust",
        "contact_sendletter": "Saada mulle e-kiri",
        "contact_replywithin": "Vastan kuni 24h jooksul",
        "contact_name": "Nimi",
        "contact_email": "E-posti aadress",
        "contact_message": "Sõnum",
        "contact_send": "Saada"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;