import React from 'react';
import DateFnsFormat from 'date-fns/format';
import EntriesRemove from './remove';

const EntriesEntry = ({ entry = '' }) => {
  const date = DateFnsFormat(entry, 'MMM D, YYYY');
  return (
    <div>
      <span>{date}</span> <EntriesRemove date={entry} />
    </div>
  );
};

export default EntriesEntry;
