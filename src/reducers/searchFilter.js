
const searchFilter = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.text;
    default:
      return state;
  }
};

export default searchFilter;
