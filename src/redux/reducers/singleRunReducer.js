const singleRunReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SINGLE_RUN':
      return action.payload;
    default:
      return {};
  }
};  

export default singleRunReducer;