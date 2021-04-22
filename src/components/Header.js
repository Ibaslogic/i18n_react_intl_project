import { FormattedMessage } from "react-intl";
import { LOCALES } from "../i18n/locales";
import logo from "../images/LogRocket_logo.png";

const Header = (props) => {
  const menu = [
    {
      title: "customers",
      path: "https://logrocket.com/customers/",
    },
    {
      title: "pricing",
      path: "https://logrocket.com/pricing/",
    },
  ];

  // Languages
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "日本語", code: LOCALES.JAPANESE },
    { name: "Français", code: LOCALES.FRENCH },
    { name: "Deutsche", code: LOCALES.GERMAN },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="brand">
          <a href="https://logrocket.com/" target="_blank" rel="noreferrer">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav>
          <ul>
            {menu.map(({ title, path }) => (
              <li key={title}>
                <a target="_blank" rel="noreferrer" href={path}>
                  <FormattedMessage id={title} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">
          {/* Language switch dropdown here */}
          Locale{" "}
          <select onChange={props.handleChange} value={props.currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
