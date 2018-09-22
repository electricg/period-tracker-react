import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { removeEntry } from '../../state/entries/actions';

class EntriesRemove extends PureComponent {
  handleClick(value) {
    const { dispatch } = this.props;

    dispatch(removeEntry(value));
  }

  render() {
    const { date } = this.props;

    return (
      <button
        type="button"
        onClick={() => {
          this.handleClick(date);
        }}
      >
        remove
      </button>
    );
  }
}

export default connect()(EntriesRemove);
