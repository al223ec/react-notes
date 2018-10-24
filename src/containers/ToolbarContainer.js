import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { addNote, deleteNote, setSearchFilter } from '../actions';

const mapStateToProps = ({
  notes: {
    isAdding,
    isDeleting,
    error,
    selectedNoteId
  },
  searchFilter: {
    filter
  }
}) => ({
  filter,
  isAdding,
  isDeleting,
  error,
  selectedNoteId,
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  deleteNote: id => dispatch(deleteNote(id)),
  setSearchFilter: filter => dispatch(setSearchFilter((filter))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
