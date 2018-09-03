import React, { Component } from 'react';
import { connect } from 'react-redux';

import { settingsSetPeriodLength } from '../../state/settings/actions';

const setPeriodLength = (dispatch, input) => {
  dispatch(settingsSetPeriodLength(input));
};

class SettingsPeriodLength extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMinus = this.handleChangeMinus.bind(this);
    this.handleChangePlus = this.handleChangePlus.bind(this);
  }

  handleChange() {
    const { dispatch } = this.props;
    const input = this.input;
    setPeriodLength(dispatch, input.value);
  }

  handleChangeMinus() {
    const { dispatch } = this.props;
    const input = this.input;
    setPeriodLength(dispatch, parseInt(input.value, 10) - 1);
  }

  handleChangePlus() {
    const { dispatch } = this.props;
    const input = this.input;
    setPeriodLength(dispatch, parseInt(input.value, 10) + 1);
  }

  render() {
    const { periodLength } = this.props;

    return (
      <div>
        <label htmlFor="settings-period-length">Period length </label>
        <div>
          <button onClick={this.handleChangeMinus}>-</button>
          <input
            type="number"
            id="settings-period-length"
            value={periodLength}
            min="1"
            ref={input => (this.input = input)}
            onChange={this.handleChange}
          />
          <button onClick={this.handleChangePlus}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings: { periodLength } }) => ({
  periodLength,
});

export default connect(mapStateToProps)(SettingsPeriodLength);
