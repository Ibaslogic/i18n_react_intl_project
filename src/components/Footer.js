import { useState } from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container mt">
      {/* Footer content here */}
      <p>
        <FormattedMessage id="click_button" />
      </p>
      <button onClick={onChange}>
        <FormattedMessage id="click_here" />
      </button>
      <p>
        <FormattedMessage id="click_count" values={{ count: count }} />
      </p>
    </div>
  );
};

export default Footer;

// Some Code Examples Here:
//
// import { useState } from "react";
// import {
//   FormattedDate,
//   FormattedMessage,
//   FormattedNumber,
//   FormattedPlural,
//   useIntl,
// } from "react-intl";

// const Footer = () => {
//   const [count, setCount] = useState(0);
//   const onChange = () => {
//     setCount((prevState) => prevState + 1);
//   };

//   const intl = useIntl();

//   return (
//     <div className="container mt">
//       {/* Footer content here */}
//       <p>
//         <FormattedMessage id="click_button" />
//       </p>
//       <button onClick={onChange}>
//         <FormattedMessage id="click_here" />
//       </button>
//       <p>
//         <FormattedMessage id="click_count" values={{ count: count }} />
//       </p>

//       <FormattedDate
//         value={Date.now()}
//         year="numeric"
//         month="long"
//         day="2-digit"
//       />
//       <br />
//       <FormattedNumber value={2000} style={`currency`} currency="USD" />
//       <br />
//       <FormattedPlural value={5} one="1 click" other="5 clicks" />
//       <br />
//       <input placeholder={intl.formatDate(Date.now())} />
//     </div>
//   );
// };

// export default Footer;
