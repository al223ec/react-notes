import React from 'react';
import VisibleNoteList from '../containers/VisibleNoteList';
import NoteEditorContainer from '../containers/NoteEditorContainer';

const NoteContainer = () => (
  <div className="note-container">
    <VisibleNoteList />
    <NoteEditorContainer />
  </div>
);

// NoteContainer.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     body: PropTypes.string,
//     timestamp: PropTypes.number,
//   })).isRequired,
// };

export default NoteContainer;
