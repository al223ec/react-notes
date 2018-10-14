import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibleNoteList from '../containers/VisibleNoteList';
import NoteEditor from './NoteEditor';


class NoteContainer extends Component {
  render() {
    const {
      notes,
      onClickNote,
      selectedNoteId,
      onNoteEditorChange,
      searchText,
    } = this.props;
    const selectedNote = notes.find(note => note.id === selectedNoteId);

    return (
      <div className="note-container">
        <VisibleNoteList />
        <NoteEditor
          selectedNote={selectedNote}
          onNoteEditorChange={onNoteEditorChange}
        />
      </div>
    );
  }
}

NoteContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    timestamp: PropTypes.number,
  })).isRequired,
};

export default NoteContainer;
