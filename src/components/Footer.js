import { FormattedDate, FormattedNumber, useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();
  return (
    <div className="container mt">
      <FormattedDate
        value={Date.now()}
        year="numeric"
        month="long"
        day="2-digit"
      />
      <br />
      <FormattedNumber value={2000} style="currency" currency="USD" />
      <br />

      <input
        placeholder={intl.formatDate(Date.now(), {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      />
    </div>
  );
};

export default Footer;
