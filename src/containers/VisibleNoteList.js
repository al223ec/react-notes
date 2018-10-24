import { connect } from 'react-redux';
import NoteList from '../components/NoteList';
import { toggleNote } from '../actions';

const getVisibleNotes = (notes, filter = '') => {
  if (!notes) {
    return [];
  }

  return notes
    .filter(n => n.body.toLowerCase().includes(filter.trim().toLowerCase()))
    .sort((a, b) => b.timestamp - a.timestamp);
};

// state.notes.notes // rename ? state.notes.items ?
// state.notes.selectedNoteId
const mapStateToProps = ({ notes: { notes, selectedNoteId }, searchFilter: { filter } }) => ({
  notes: getVisibleNotes(notes, filter),
  selectedNoteId,
});

const mapDispatchToProps = dispatch => ({
  toggleNote: id => dispatch(toggleNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
