import React from 'react';
import { connect } from 'react-redux';

import FieldsNumber from '../fields/number';
import { settingsSetPeriodLength } from '../../state/settings/actions';

const SettingsPeriodLength = ({ dispatch, periodLength }) => {
  return (
    <FieldsNumber
      dispatch={dispatch}
      action={settingsSetPeriodLength}
      id="settings-period-length"
      label="Period length"
      value={periodLength}
    />
  );
};

const mapStateToProps = ({ settings: { periodLength } }) => ({
  periodLength,
});

export default connect(mapStateToProps)(SettingsPeriodLength);
