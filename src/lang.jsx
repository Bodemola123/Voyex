import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources:{
      en:{
        translation:{
          "Search":"Search",
          "Templates":"Templates",
          "GalactiMart":"GalactiMart",
          "Workspace":"Workspace",
          "Sign up":"Sign up",
          "Log in":"Log in",
          "Search for":"Search for ",
          "anything":"anything",
          "Start Your AI Journey":"Start Your AI Journey",
          "Buy Plan":"Buy Plan",
          "Advertise":"Advertise",
          "Resources":"Resources",
          "Start your search voyeux":"Start your search voyeux",
          "Surprise ME!":"Surprise ME!",
          "Trending Searches":"Trending Searches",
          "Recently Added":"Recently Added"
        }

      },
      es:{
        translation:{
          "Search":"Búsqueda",
          "Templates":"Plantillas",
          "GalactiMart":"GalactiMart",
          "Workspace":"Workspace",
          "Search for":"Búsqueda ",
          "anything":"cualquier cosa",
          "Start Your AI Journey":"Empieza tu viaje de inteligencia artificial",
          "Buy Plan":"Comprar Plan",
          "Advertise":"Anuncio",
          "Resources":"Recursos",
          "Start your search voyeux":"Iniciar su búsqueda voyeux",
          "Surprise ME!":"¡Sorpresa!",
          "Trending Searches":"Búsquedas de tendencias",
          "Recently Added":"Recientemente"
        }
      }
    },
    lng:'en',

    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;