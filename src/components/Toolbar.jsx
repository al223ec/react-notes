import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { setSearchFilter } = this.props;
    setSearchFilter(event.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="toolbar">
        <button className="toolbar-button" onClick={this.props.onNewNote}>New</button>
        <button className="toolbar-button" onClick={this.props.onDeleteNote}>Delete</button>
        <input className="toolbar-search" type="text" placeholder="Search..." onInput={this.handleInput}></input>
      </div>
    );
  }
}

Toolbar.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default Toolbar;
