import React from 'react';

class DonationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form
        action='#'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type='number'></input>
        <button
          className='button'
          type='submit'
          disabled={!this.state.formValid}
        >
          Give Now
        </button>
      </form>
    );
  }
}

export default DonationForm;
