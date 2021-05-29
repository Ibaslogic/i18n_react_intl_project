import { FormattedMessage } from "react-intl";
import { LOCALES } from "../i18n/locales";

const Header = (props) => {
  const menu = [
    {
      key: "about_project",
      title: "About the project",
      path: "#",
    },
    {
      key: "contact_us",
      title: "Contact us",
      path: "#",
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
        <div className="brand">ReactIntl</div>
        <nav>
          <ul>
            {menu.map(({ title, path, key }) => (
              <li key={title}>
                <a href={path}>
                  <FormattedMessage id={key} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">
          {/* Language switch dropdown here */}
          <FormattedMessage id="languages" />{" "}
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
