import React from 'react';
import { connect } from 'react-redux';

import FieldsCheckbox from '../fields/checkbox';
import { settingsSetStartDayOfWeek } from '../../state/settings/actions';

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

const mapStateToProps = ({ settings: { startDayOfWeek } }) => ({
  startDayOfWeek,
});

export default connect(mapStateToProps)(SettingsStartDayOfWeek);
