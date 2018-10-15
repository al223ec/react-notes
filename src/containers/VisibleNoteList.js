import { connect } from 'react-redux';
import NoteList from '../components/NoteList';
import { toggleNote } from '../actions';

const getVisibleNotes = (notes, filter) => {
  if (!notes) {
    return [];
  }

  return notes
    .filter(note => note.body.toLowerCase().indexOf(filter ? filter.toLowerCase() !== -1 : true))
    .sort((a, b) => b.timestamp - a.timestamp);
};

// state.notes.notes // rename ?
// state.notes.selectedNoteId
const mapStateToProps = ({ notes: { notes, selectedNoteId }, searchFilter }) => ({
  notes: getVisibleNotes(notes, searchFilter.text),
  selectedNoteId,
});

const mapDispatchToProps = dispatch => ({
  toggleNote: id => dispatch(toggleNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
