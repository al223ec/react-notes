import React from 'react';
import PropTypes from 'prop-types';
import NoteSelector from './NoteSelector';

const handleOnClick = (id, toggleNote) => () => toggleNote(id);
const NoteList = ({ notes, selectedNoteId, toggleNote }) => (
  <div className="note-selectors">
    {notes.map(note => (
      <NoteSelector
        key={note.id}
        body={note.body}
        timestamp={note.timestamp}
        id={note.id}
        selected={note.id === selectedNoteId}
        onClick={handleOnClick(note.id, toggleNote)}
      />
    ))}
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }).isRequired).isRequired,
  selectedNoteId: PropTypes.number.isRequired,
  toggleNote: PropTypes.func.isRequired
};

export default NoteList;
