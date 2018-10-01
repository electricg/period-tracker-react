import React from 'react';
import { connect } from 'react-redux';

import FieldsNumber from '../fields/number';
import { settingsSetPeriodLength } from '../../state/settings/actions';
import { getSettingsPeriodLength } from '../../state/settings/selectors';

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

const mapStateToProps = state => ({
  periodLength: getSettingsPeriodLength(state),
});

export default connect(mapStateToProps)(SettingsPeriodLength);
