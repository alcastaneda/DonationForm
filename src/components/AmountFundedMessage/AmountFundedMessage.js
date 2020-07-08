import React from "react";

const AmountFundedMessage = ({ targetAmnt, totalDonations }) => {
  const amountNeeded = targetAmnt - totalDonations;
  const amountNeededCommas = amountNeeded.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  return (
    <div className="tooltip">
      <p aria-hidden="false" tabIndex="2">
        {amountNeeded > 0 ? (
          <React.Fragment>
            <span className="bold">{amountNeededCommas}</span> still needed to
            fund this project
          </React.Fragment>
        ) : (
          "This project has been fully funded!"
        )}
      </p>
      <span className="tooltip-text" />
    </div>
  );
};

export default AmountFundedMessage;
