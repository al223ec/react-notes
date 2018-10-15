
let nextNoteId = 4;
export const addNote = text => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  text
});

export const setSearchFilter = filter => ({
  type: 'SET_SEARCH_FILTER',
  filter
});

export const fetchNotes = () => ({
  type: 'FETCH_NOTES',
});

export const toggleNote = id => ({
  type: 'TOGGLE_NOTE',
  id
});
