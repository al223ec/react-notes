
const searchFilter = (state = { filter: '' }, action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return { filter: action.filter };
    default:
      return state;
  }
};

export default searchFilter;
