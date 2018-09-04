import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateFnsFormat from 'date-fns/format';

import { addEntry } from '../../state/entries/actions';

class EntriesAdd extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this.handleShowAdd = this.handleShowAdd.bind(this);
    this.handleHideAdd = this.handleHideAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleShowAdd() {
    this.setState({ show: true });
  }

  handleHideAdd() {
    this.setState({ show: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const value = this.input.value;
    const form = this.form;

    dispatch(addEntry(value));

    form.reset();
  }

  handleReset() {
    this.handleHideAdd();
  }

  render() {
    const { show } = this.state;
    const { addLabel } = this.props;
    const today = DateFnsFormat(new Date(), 'YYYY-MM-DD');

    return (
      <div>
        <button onClick={this.handleShowAdd}>{addLabel}</button>
        <form
          id="add-form"
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          ref={form => (this.form = form)}
          style={{ display: show ? 'block' : 'none' }}
        >
          <input
            type="date"
            id="add-date"
            required=""
            defaultValue={today}
            ref={input => (this.input = input)}
          />
          <input type="reset" value="Cancel" />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default connect()(EntriesAdd);
