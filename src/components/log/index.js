import React from 'react';

import EntriesAdd from '../entries/add';
import EntriesList from '../entries/list';

const Log = () => {
  return (
    <div>
      log
      <EntriesAdd addLabel="add entry" />
      <EntriesList />
    </div>
  );
};

export default Log;
