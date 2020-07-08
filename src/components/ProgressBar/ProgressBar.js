import React from "react";

function calculateProgress(totalDonations, targetAmnt) {
  const percentage = (totalDonations / targetAmnt) * 100;
  console.log(percentage, totalDonations);
  return percentage;
}

const ProgressBar = ({ totalDonations, targetAmnt }) => {
  return (
    <div className="prgBr">
      <div
        className="prgBr-filler"
        style={{ width: `${calculateProgress(totalDonations, targetAmnt)}%` }}
      />
    </div>
  );
};

export default ProgressBar;
