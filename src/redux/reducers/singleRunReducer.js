const singleRunReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SINGLE_RUN':
      return action.payload;
    case 'CLEAR_SINGLE_RUN':
      return {};
    default:
      return state;
  }
};  

export default singleRunReducer;