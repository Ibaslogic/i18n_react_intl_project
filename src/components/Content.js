import { FormattedMessage } from "react-intl";

const Content = () => {
  return (
    <div className="container hero">
      <h1>
        <FormattedMessage id="welcome_plan" />
      </h1>
      <p>
        <FormattedMessage id="price_start" values={{ n: 99 }} />
      </p>
      <p>
        <FormattedMessage id="session_start" values={{ n: "1000" }} />
      </p>
      <p>
        <FormattedMessage id="start_today" values={{ d: Date.now() }} />
      </p>
    </div>
  );
};

export default Content;
