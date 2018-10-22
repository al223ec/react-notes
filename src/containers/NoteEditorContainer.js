import { connect } from 'react-redux';
import NoteEditor from '../components/NoteEditor';
import { editNote } from '../actions';

const getNote = (notes, selectedNoteId) => {
  if (!notes) {
    return {};
  }

  return notes.find(n => n.id === selectedNoteId) || {};
};

const mapStateToProps = ({ notes: { notes, selectedNoteId } }) => {
  const { id, body, timestamp } = getNote(notes, selectedNoteId);
  return {
    id,
    body,
    timestamp
  };
};

const mapDispatchToProps = dispatch => ({
  editNote: ({ id, body }) => dispatch(editNote(id, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
