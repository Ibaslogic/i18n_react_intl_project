import { FormattedMessage } from "react-intl";

const Content = () => {
  return (
    <div className="container hero">
      <h1>
        <FormattedMessage id="learn_to" />
      </h1>
      <p>
        <FormattedMessage id="price_display" values={{ n: 59.99 }} />
      </p>
      <p>
        <FormattedMessage id="number_display" values={{ n: 2000 }} />
      </p>
      <p>
        <FormattedMessage id="start_today" values={{ d: new Date() }} />
      </p>
    </div>
  );
};

export default Content;
