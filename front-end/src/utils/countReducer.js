function countReducer(state, action) {
  switch (action.type) {
  case 'increment':
    return { count: state.count + 1 };
  case 'decrement':
    if (state.count === 0) return { count: 0 };
    return { count: state.count - 1 };
  default:
    throw new Error('Unknown action');
  }
}

export default countReducer;
