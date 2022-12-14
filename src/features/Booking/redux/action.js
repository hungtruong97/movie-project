import actions from "./type";
import requester from "app/api";
import apiPath from "app/apiPath";

export const fetchBannerActions = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });
    console.log(res.data.content);
    next({
      type: actions.SET_BANNERS,
      payload: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieActions = (page) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIES,
        params: {
          maNhom: "GP01",
          soTrang: page,
          soPhanTuTrenTrang: 4,
        },
      });
      console.log(res.data.content);
      next({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMovieDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_DETAIL,
        params: {
          maPhim: id,
        },
      });
      console.log(res.data.content);
      next({
        type: actions.SET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fecthMovieScheduleAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_SCHEDULE,
        params: {
          maPhim: id,
        },
      });
      console.log(res.data.content);
      next({
        type: actions.SET_MOVIE_SCHEDULE,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
