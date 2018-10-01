import React from 'react';
import { connect } from 'react-redux';

import FieldsCheckbox from '../fields/checkbox';
import { settingsSetStartDayOfWeek } from '../../state/settings/actions';
import { getSettingsStartDayOfWeek } from '../../state/settings/selectors';

const SettingsStartDayOfWeek = ({ dispatch, startDayOfWeek }) => {
  return (
    <FieldsCheckbox
      dispatch={dispatch}
      action={settingsSetStartDayOfWeek}
      id="settings-week-start"
      label="Mon-Sun calendar"
      checked={startDayOfWeek}
    />
  );
};

const mapStateToProps = state => ({
  startDayOfWeek: getSettingsStartDayOfWeek(state),
});

export default connect(mapStateToProps)(SettingsStartDayOfWeek);
