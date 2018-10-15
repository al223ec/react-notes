const notes = (state = {
  selectedNoteId: 1,
  notes: [
    { id: 1, body: 'Redux this is a first test', timestamp: Date.now() },
    { id: 2, body: 'Redux this is a second test', timestamp: Date.now() },
    { id: 3, body: 'Redux this is a third test', timestamp: Date.now() },
  ]
}, action) => {
  switch (action.type) {
    case 'SELECTED_NOTE_ID':
      return state.selectedNoteId;
    case 'FETCH_NOTE':
      return state.notes.find(n => n.id === action.id);
    case 'FETCH_NOTES':
      return state.notes;
    case 'TOGGLE_NOTE':
      return {
        selectedNoteId: action.id,
        notes: state.notes
      };
    case 'ADD_NOTE':
      return [
        ...state.notes,
        {
          id: action.id,
          body: action.body,
          timestamp: Date.now()
        }
      ];
    default:
      return state;
  }
};

export default notes;
