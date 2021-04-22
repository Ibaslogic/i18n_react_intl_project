import { useState } from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages";

import { IntlProvider } from "react-intl";

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

  //localstorage
  function getInitialLocal() {
    // getting stored items
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
