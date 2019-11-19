const runsForCalendarReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RUNS_FOR_CALENDAR':
        return action.payload;
      default:
        return state;
    }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default runsForCalendarReducer;
  