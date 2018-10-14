import React from 'react';
import PropTypes from 'prop-types';
import NoteSelector from './NoteSelector';

const handleOnClick = (id, toggleNote) => toggleNote(id);
const NoteSelectors = ({ notes, toggleNote }) => (
  <div className="note-selectors">
    {notes.map(note => (
      <NoteSelector
        key={note.id}
        body={note.body}
        timestamp={note.timestamp}
        id={note.id}
        selectedNoteId={1}
        onClickNote={handleOnClick(note.id, toggleNote)}
      />
    ))}
  </div>
);

NoteSelectors.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }).isRequired).isRequired,
  toggleNote: PropTypes.func.isRequired
};

export default NoteSelectors;
