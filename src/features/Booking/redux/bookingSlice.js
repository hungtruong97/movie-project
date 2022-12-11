import actions from "features/Booking/redux/type";
import produce from "immer";

const initialState = {
  banners: [],
  movies: {},
  movieDetail: null,
  movieSchedule: null,
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
      case actions.SET_MOVIE_DETAIL: {
        draft.movieDetail = action.payload;
        break;
      }
      case actions.SET_MOVIE_SCHEDULE: {
        draft.movieSchedule = action.payload;
        break;
      }
      default:
        break;
    }
  });
};

export default reducer;
