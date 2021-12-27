import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ pages, page, fetchPerformers, changePage }) => {
  const handleClick = ({ e, x }) => {
    console.log("click", e);
    fetchPerformers(x + 1);
    changePage(x + 1);
  };
  return (
    pages > 1 && (
      <Pagination className="justify-content-center">
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            onClick={(e) => handleClick({ e, x })}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
