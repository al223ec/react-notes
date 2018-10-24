const notes = (state = {
  selectedNoteId: 1,
  notes: [
    { id: 1, body: 'Redux this is a first test', timestamp: Date.now() },
    { id: 2, body: 'Redux this is a second test', timestamp: Date.now() },
    { id: 3, body: 'Redux this is a third test', timestamp: Date.now() },
  ]
}, action) => {
  switch (action.type) {
    case 'TOGGLE_NOTE': {
      return {
        selectedNoteId: action.id,
        notes: state.notes
      };
    }

    case 'ADD_NOTE': {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.id,
            body: action.body,
            timestamp: Date.now()
          }
        ]
      };
    }

    case 'EDIT_NOTE': {
      console.log(action);
      const note = {
        id: action.id,
        body: action.note.body,
        timestamp: Date.now()
      };

      return {
        ...state,
        notes: state.notes.map(n => (n.id === action.id ? note : n)),
      };
    }

    case 'DELETE_NOTE': {
      return {
        ...state,
        notes: state.notes.filter(n => n.id !== action.id),
      };
    }

    default:
      return state;
  }
};

export default notes;
