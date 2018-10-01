import React from 'react';
import { connect } from 'react-redux';

import FieldsCheckbox from '../fields/checkbox';
import { settingsSetShowExtendedMonth } from '../../state/settings/actions';
import { getSettingsShowExtendedMonth } from '../../state/settings/selectors';

const SettingsShowExtendedMonth = ({ dispatch, showExtendedMonth }) => {
  return (
    <FieldsCheckbox
      dispatch={dispatch}
      action={settingsSetShowExtendedMonth}
      id="settings-extended-month"
      label="Show extended month"
      checked={showExtendedMonth}
    />
  );
};

const mapStateToProps = state => ({
  showExtendedMonth: getSettingsShowExtendedMonth(state),
});

export default connect(mapStateToProps)(SettingsShowExtendedMonth);
