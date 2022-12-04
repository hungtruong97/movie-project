import { Row, Col, Card, Button } from "antd";
import React from "react";
const { Meta } = Card;

const MovieList = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">Movie List</h1>
      <Row gutter={30}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <Button type="primary" size="large">
              Book
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
