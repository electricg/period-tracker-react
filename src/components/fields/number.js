import React, { PureComponent } from 'react';

import Icon from '../icon';

class FieldsNumber extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(n = 0) {
    const { dispatch, action } = this.props;
    const input = this.input;
    const value = parseInt(input.value, 10) + n;
    dispatch(action(value));
  }

  render() {
    const { id, label, value } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <div>
          <button
            onClick={() => {
              this.handleChange(-1);
            }}
          >
            <Icon id="minus" cssModifier="number" />
          </button>
          <input
            type="number"
            id={id}
            value={value}
            min="1"
            ref={input => (this.input = input)}
            onChange={() => {
              this.handleChange();
            }}
          />
          <button
            onClick={() => {
              this.handleChange(1);
            }}
          >
            <Icon id="plus" cssModifier="number" />
          </button>
        </div>
      </div>
    );
  }
}

export default FieldsNumber;
