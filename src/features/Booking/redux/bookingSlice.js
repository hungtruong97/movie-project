import actions from "features/Booking/redux/type";
import produce from "immer";

const initialState = {
  banners: [],
  movies: {},
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.SET_BANNERS: {
        draft.banners = action.payload;
        break;
      }
      case actions.SET_MOVIES: {
        draft.movies = action.payload;
        break;
      }
      default:
        break;
    }
  });
};

export default reducer;
