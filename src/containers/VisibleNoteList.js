import { connect } from 'react-redux';
import NoteSelectors from '../components/NoteSelectors';
import { toggleNote } from '../actions';

const getVisibleNotes = (notes, filter) => {
  if (!notes) {
    return [];
  }

  return notes
    .filter(note => note.body.toLowerCase().indexOf(filter ? filter.toLowerCase() !== -1 : true))
    .sort((a, b) => b.timestamp - a.timestamp);
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.searchFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleNote: id => dispatch(toggleNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteSelectors);
