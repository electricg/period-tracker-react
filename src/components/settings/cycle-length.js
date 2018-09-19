import React from 'react';
import { connect } from 'react-redux';

import FieldsNumber from '../fields/number';
import { settingsSetCycleLength } from '../../state/settings/actions';

const SettingsCycleLength = ({ dispatch, cycleLength }) => {
  return (
    <FieldsNumber
      dispatch={dispatch}
      action={settingsSetCycleLength}
      id="settings-cycle-length"
      label="Cycle length"
      value={cycleLength}
    />
  );
};

const mapStateToProps = ({ settings: { cycleLength } }) => ({
  cycleLength,
});

export default connect(mapStateToProps)(SettingsCycleLength);
