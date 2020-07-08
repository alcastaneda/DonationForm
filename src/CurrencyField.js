import React from "react";
import PropTypes from "prop-types";

class CurrencyField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  toCurrency(number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });

    return formatter.format(number);
  }

  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <input
            type="number"
            name={this.props.name}
            value={this.props.value}
            onChange={this.onChange.bind(this)}
            onBlur={this.toggleEditing.bind(this)}
          />
        ) : (
          <input
            type="text"
            name={this.props.name}
            value={this.toCurrency(this.props.value)}
            onFocus={this.toggleEditing.bind(this)}
            readOnly
          />
        )}
      </div>
    );
  }
}

CurrencyField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default CurrencyField;
