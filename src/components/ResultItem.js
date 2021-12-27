import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import Rating from "./Rating";

const ResultItem = ({ performer }) => {
  //   console.log(performer);
  const {
    about: { intro },
    personal_info: { first_name, profile_image_url },
    hourly_price: { price_one_hour },
    rating_average,
    review_count,
    genre_category_values,
    artist_category_value,
    travel_city_value,
  } = performer;
  //   console.log(first_name, profile_image_url, price_one_hour);
  return (
    <Card className="my-3 p-3 rounded">
      <Image
        src={profile_image_url}
        roundedCircle
        fluid
        className="artist-img"
      />

      <Card.Body>
        <Card.Title as="h2">{first_name}</Card.Title>

        <Card.Text as="h3">
          {travel_city_value[0]} | {artist_category_value[0]} |{" "}
          {genre_category_values[0]}
        </Card.Text>

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

        <Button className="rounded-pill">Check Availability</Button>
      </Card.Body>
    </Card>
  );
};

export default ResultItem;
