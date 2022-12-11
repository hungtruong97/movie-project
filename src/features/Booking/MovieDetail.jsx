import { Col, Row, Rate, Tag, Button, Modal } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fecthMovieScheduleAction,
  fetchMovieDetailAction,
} from "./redux/action";
import moment from "moment";
import { useState } from "react";
import MovieSchedule from "./components/MovieSchedule";

const MovieDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    var iframe = document.querySelector("#video-trailer");
    if (iframe !== null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    setIsModalOpen(false);
  };

  const params = useParams();
  const movieId = params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetailAction(movieId));
    dispatch(fecthMovieScheduleAction(movieId));
  }, [params]);

  const movieDetail = useSelector((state) => state.booking.movieDetail);
  const trailerUrl = movieDetail?.trailer.replace("watch?v=", "/embed/");
  return (
    movieDetail && (
      <div className="container mx-auto pt-10">
        <Row>
          <Col span={8}>
            <img className="w-full" src={movieDetail.hinhAnh} alt="" />
          </Col>
          <Col className="pl-10" span={16}>
            <h1>{movieDetail.tenPhim}</h1>
            <p className="text-xl">{movieDetail.moTa}</p>
            <table className="table-auto text-xl text-left">
              <tbody>
                <tr>
                  <th>Rating: </th>
                  <td>
                    <Rate value={movieDetail.danhGia / 2} />
                  </td>
                </tr>
                <tr>
                  <th>
                    {movieDetail.dangChieu && (
                      <Tag color="magenta">Showing</Tag>
                    )}
                  </th>
                </tr>
                <tr>
                  <th>
                    {movieDetail.sapChieu && (
                      <Tag color="blue">Will Show Soon</Tag>
                    )}
                  </th>
                </tr>
                <tr>
                  <th>Show Date: </th>
                  <td>
                    {moment(movieDetail.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      className="mr-3"
                      type="primary"
                      size="large"
                      onClick={showModal}
                    >
                      Watch Trailer
                    </Button>
                  </td>
                  <td>
                    <Button type="primary" size="large">
                      Book
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <MovieSchedule />

        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          width={800}
          footer={null}
          closable={false}
          centered={true}
        >
          <iframe
            id="video-trailer"
            width="100%"
            height="500"
            src={trailerUrl}
            title={movieDetail?.tenPhim}
          ></iframe>
        </Modal>
      </div>
    )
  );
};

export default MovieDetail;
