import React from 'react'

export default class MyComponent extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      number: 0,
    };
    this.onValidNumberInput = this.onValidNumberInput.bind(this);
  }

  onValidNumberInput(e) {
    const number = e.target.value;
    if (!number || typeof number === 'number') {
      this.setState({ number });
    }
  }

  render() {
    const { includedProp } = this.props;
    const { number } = this.state;
    return (
      <div className="foo bar" includedProp={includedProp}>
        {/* <ValidateNumberInputComponent onChangeHandler={onValidNumberInput} number={number} /> */}
      </div>
    );
  }
}