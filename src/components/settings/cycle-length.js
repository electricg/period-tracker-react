import React, { Component } from 'react';
import { connect } from 'react-redux';

import { settingsSetCycleLength } from '../../state/settings/actions';

const setCycleLength = (dispatch, input) => {
  dispatch(settingsSetCycleLength(input));
};

class SettingsCycleLength extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMinus = this.handleChangeMinus.bind(this);
    this.handleChangePlus = this.handleChangePlus.bind(this);
  }

  handleChange() {
    const { dispatch } = this.props;
    const input = this.input;
    setCycleLength(dispatch, input.value);
  }

  handleChangeMinus() {
    const { dispatch } = this.props;
    const input = this.input;
    setCycleLength(dispatch, parseInt(input.value, 10) - 1);
  }

  handleChangePlus() {
    const { dispatch } = this.props;
    const input = this.input;
    setCycleLength(dispatch, parseInt(input.value, 10) + 1);
  }

  render() {
    const { cycleLength } = this.props;

    return (
      <div>
        <label htmlFor="settings-cycle-length">Cycle length </label>
        <div>
          <button onClick={this.handleChangeMinus}>-</button>
          <input
            type="number"
            id="settings-cycle-length"
            value={cycleLength}
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

const mapStateToProps = ({ settings: { cycleLength } }) => ({
  cycleLength,
});

export default connect(mapStateToProps)(SettingsCycleLength);
