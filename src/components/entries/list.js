import React from 'react';
import { connect } from 'react-redux';
import EntriesEntry from './entry';

const EntriesList = ({ entries = [] }) => {
  return (
    <div>
      {entries.map(item => (
        <EntriesEntry key={item} entry={item} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ entries = [] }) => ({
  entries,
});

export default connect(mapStateToProps)(EntriesList);
