import React from "react";
import HomeCarousel from "./components/HomeCarousel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchBannerActions,
  fetchMovieActions,
} from "features/Booking/redux/action";
import MovieList from "./components/MovieList";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBannerActions);
    dispatch(fetchMovieActions());
  }, []);
  return (
    <div>
      <HomeCarousel />
      <MovieList />
    </div>
  );
};

export default Home;
