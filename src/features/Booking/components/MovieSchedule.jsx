import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthMovieScheduleAction } from "../redux/action";
import { Tabs } from "antd";

const MovieSchedule = () => {
  const params = useParams();
  const movieId = params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthMovieScheduleAction(movieId));
  }, [params]);

  const movieSchedule = useSelector((state) => state.booking.movieSchedule);

  return (
    movieSchedule && (
      <div>
        <Tabs
          tabPosition="left"
          items={movieSchedule.heThongRapChieu.map((item, i) => {
            return {
              label: <img className="w-10" src={item.logo} alt="" />,
              key: item.maHeThongRap,
              children: `Content of Tab `,
            };
          })}
        />
      </div>
    )
  );
};

export default MovieSchedule;
