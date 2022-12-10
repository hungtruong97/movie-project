import { Row, Col, Card, Button, Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieActions } from "../redux/action";

const MovieList = () => {
  const movies = useSelector((state) => {
    return state.booking.movies;
  });

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">Movie List</h1>
      <Row gutter={30}>
        {movies.items?.map((item) => {
          return (
            <Col
              className="mb-7"
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={item.maPhim}
            >
              <Card
                hoverable
                style={{
                  width: "100%",
                  height: "100%",
                }}
                cover={
                  <img
                    className="h-72 object-cover object-left-top"
                    alt={item.biDanh}
                    src={item.hinhAnh}
                  />
                }
              >
                <h1 className="text-3xl my-2 font-semibold h-20">
                  {item.tenPhim}
                </h1>
                <p className="text-2xl my-2 h-40">
                  {item.moTa.substr(0, 100) + "..."}
                </p>
                <Button type="primary" size="large">
                  Book
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
      {movies.items && (
        <Pagination
          pageSize={4}
          defaultCurrent={movies.currentPage}
          total={movies.totalCount}
          onChange={(page) => {
            dispatch(fetchMovieActions(page));
          }}
        />
      )}
    </div>
  );
};

export default MovieList;
