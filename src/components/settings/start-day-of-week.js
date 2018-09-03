import React, { Component } from 'react';
import { connect } from 'react-redux';

import { settingsSetStartDayOfWeek } from '../../state/settings/actions';

const setStartDayOfWeek = (dispatch, checked) => {
  dispatch(settingsSetStartDayOfWeek(checked));
};

class SettingsStartDayOfWeek extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { dispatch } = this.props;
    const input = this.input;
    setStartDayOfWeek(dispatch, input.checked);
  }

  render() {
    const { startDayOfWeek } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          id="settings-week-start"
          checked={startDayOfWeek}
          ref={input => (this.input = input)}
          onChange={this.handleChange}
        />
        <label htmlFor="settings-week-start">Mon-Sun calendar</label>
      </div>
    );
  }
}

const mapStateToProps = ({ settings: { startDayOfWeek } }) => ({
  startDayOfWeek,
});

export default connect(mapStateToProps)(SettingsStartDayOfWeek);
