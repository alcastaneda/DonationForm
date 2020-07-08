import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import AmountFundedMessage from "../AmountFundedMessage/AmountFundedMessage";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
// import CurrencyField from "../../CurrencyField";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysLeft: "zero",
      targetAmnt: 0,
      totalDonations: 0,
      totalDonors: 0,
      amount: "50",
      // value: "50",
      amountValid: true,
      formValid: true,
      errorMsg: {}
    };
  }

  componentDidMount = () => {
    try {
      // get donation data and set state
      this.setState({
        daysLeft: "four",
        targetAmnt: 5000,
        totalDonations: 3750,
        totalDonors: 11
      });
    } catch (err) {
      alert(err.message);
    }
  };

  validateForm = () => {
    const { amountValid } = this.state;
    this.setState({
      formValid: amountValid
    });
  };

  updateAmount = amount => {
    this.setState({ amount }, this.validateAmount(amount));
  };

  // updateValue = value => {
  //   console.log("value", value);
  //   this.setState({ value });
  // };

  validateAmount = amount => {
    let amountValid = true;
    let errorMsg = { ...this.state.errorMsg };
    const numAmount = this.convertAmount(amount);

    if (!amount) {
      amountValid = false;
      errorMsg.amount = "An amount is required to make a donation";
    } else if (numAmount < 5) {
      amountValid = false;
      errorMsg.amount = "We are unable to accept donations less than $5 :(";
    }

    this.setState({ amountValid, errorMsg }, this.validateForm);
  };

  convertAmount(amount) {
    // eslint-disable-next-line no-useless-escape
    return Number(amount.replace(/[^0-9\.]/g, ""));
  }

  // Handle form submission
  handleSubmit = e => {
    e.preventDefault();
    try {
      alert("Thank you for donating!");
      e.target.reset();
      const totalDonations =
        this.state.totalDonations + this.convertAmount(this.state.amount);
      const totalDonors = this.state.totalDonors + 1;
      this.setState({
        amount: "50",
        formValid: true,
        totalDonations,
        totalDonors
      });
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <AmountFundedMessage
          targetAmnt={this.state.targetAmnt}
          totalDonations={this.state.totalDonations}
        />
        <div className="card-wrapper" role="main">
          <ProgressBar
            totalDonations={this.state.totalDonations}
            targetAmnt={this.state.targetAmnt}
          />
          <div className="card-content">
            <h1 aria-hidden="false" tabIndex="0">
              Only {this.state.daysLeft} days left to fund this project
            </h1>
            <p tabIndex="0">
              Join the <span className="bold">{this.state.totalDonors}</span>{" "}
              other donors who have already supported this project.
            </p>
            <form action="#" id="js-form" onSubmit={e => this.handleSubmit(e)}>
              <div className="input-container">
                <span className="bold">$</span>
                <CurrencyInput
                  className="bold"
                  aria-label="donation amount"
                  name="amount"
                  value={this.state.amount}
                  type="text"
                  onChange={e => this.updateAmount(e.target.value)}
                />
              </div>

              {/* <CurrencyField
                value={this.state.value}
                onChange={e => {
                  console.log(e);
                  this.updateValue(e);
                }}
              /> */}
              <button
                className="bold"
                type="submit"
                disabled={!this.state.formValid}
              >
                Give Now
              </button>
              <ValidationMessage
                valid={this.state.amountValid}
                message={this.state.errorMsg.amount}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DonationForm;
