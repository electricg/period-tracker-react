import React, { PureComponent } from 'react';

class FieldsCheckbox extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { dispatch, action } = this.props;
    const input = this.input;
    const { checked: value } = input;
    dispatch(action(value));
  }

  render() {
    const { id, label, checked } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          ref={input => (this.input = input)}
          onChange={this.handleChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default FieldsCheckbox;
