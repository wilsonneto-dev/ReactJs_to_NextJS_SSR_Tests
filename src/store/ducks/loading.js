/* types */
export const Types = {
  LOADING : 'loading/UPDATE'
};

/* initial state */
const INITIAL_STATE = { 
  loading: false 
};

function GlobalLoading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return {...state, loading: action.payload.loading };
    default:
      return state;
  }
}

/* actions */
export const Creators = {
  updateGlobalLoading: loading => ({
    type: Types.LOADING,
    payload: { loading }
  })
};

/* exports */
export default GlobalLoading;