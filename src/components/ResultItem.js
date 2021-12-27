import React from "react";
import { Card, Image } from "react-bootstrap";
import Rating from "./Rating";

const ResultItem = ({ performer }) => {
  //   console.log(performer);
  const {
    about: { intro },
    personal_info: { first_name, profile_image_url },
    hourly_price: { price_one_hour },
    rating_average,
    review_count,
  } = performer;
  //   console.log(first_name, profile_image_url, price_one_hour);
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img
        as={Image}
        src={profile_image_url}
        variant="top"
        fluid={true}
        roundedCircle={true}
      />
      {/* <Image scr={profile_image_url} /> */}

      <Card.Body>
        <Card.Title as="h4">{first_name}</Card.Title>

        <Card.Text as="div">
          {intro.length > 150 ? intro.slice(0, 150).concat() : intro}
        </Card.Text>

        <Card.Text as="div">
          <Rating value={rating_average} text={`${review_count} reviews`} />
        </Card.Text>

        <Card.Text as="h3">
          From: <span>&#8377;</span>
          {price_one_hour}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResultItem;
