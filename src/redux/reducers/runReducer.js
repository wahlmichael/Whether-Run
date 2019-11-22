const runsForCalendarReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RUNS_FOR_CALENDAR':
        return action.payload;
      default:
        return state;
    }
  };


export default runsForCalendarReducer