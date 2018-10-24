import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onDeleteNote() {
    const { deleteNote, selectedNoteId } = this.props;
    deleteNote(selectedNoteId);
  }

  handleInput(event) {
    const { setSearchFilter } = this.props;
    setSearchFilter(event.target.value);
  }

  render() {
    const { addNote } = this.props;

    return (
      <div className="toolbar">
        <button type="button" className="toolbar-button" onClick={addNote}>New</button>
        <button type="button" className="toolbar-button" onClick={this.onDeleteNote}>Delete</button>
        <input className="toolbar-search" type="text" placeholder="Search..." onInput={this.handleInput} />
      </div>
    );
  }
}

Toolbar.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  selectedNoteId: PropTypes.number.isRequired,
};

export default Toolbar;
