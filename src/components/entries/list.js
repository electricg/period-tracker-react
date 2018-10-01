import React from 'react';
import { connect } from 'react-redux';

import EntriesEntry from './entry';
import { getEntriesOriginal } from '../../state/entries/selectors';

const EntriesList = ({ original = [] }) => {
  return (
    <div>
      {original.map(item => (
        <EntriesEntry key={item} entry={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ original: getEntriesOriginal(state) });

export default connect(mapStateToProps)(EntriesList);
