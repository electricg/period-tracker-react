import React, { Component } from 'react';
import { connect } from 'react-redux';

import { settingsSetShowExtendedMonth } from '../../state/settings/actions';

const setShowExtendedMonth = (dispatch, checked) => {
  dispatch(settingsSetShowExtendedMonth(checked));
};

class SettingsShowExtendedMonth extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { dispatch } = this.props;
    const input = this.input;
    setShowExtendedMonth(dispatch, input.checked);
  }

  render() {
    const { ShowExtendedMonth } = this.props;

    return (
      <div>
        <input
          type="checkbox"
          id="settings-extended-month"
          checked={ShowExtendedMonth}
          ref={input => (this.input = input)}
          onChange={this.handleChange}
        />
        <label htmlFor="settings-extended-month">Show extended month</label>
      </div>
    );
  }
}

const mapStateToProps = ({ settings: { showExtendedMonth } }) => ({
  showExtendedMonth,
});

export default connect(mapStateToProps)(SettingsShowExtendedMonth);
