const notes = (state = [
  { id: 1, body: 'Redux this is a first test', timestamp: Date.now() },
  { id: 2, body: 'Redux this is a second test', timestamp: Date.now() },
  { id: 3, body: 'Redux this is a third test', timestamp: Date.now() },
], action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return state;
    case 'ADD_NOTE':
      return [
        ...state,
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
