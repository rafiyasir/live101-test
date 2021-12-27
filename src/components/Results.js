import React from "react";
import { Row, Col } from "react-bootstrap";
import Paginate from "./Pagination";
import ResultItem from "./ResultItem";

const Results = ({ performers, pages, page, fetchPerformers, changePage }) => {
  console.log("results", performers);
  console.log("pages", pages);
  console.log("page", page);
  return (
    <>
      {/* <ResultItem performers={performers} /> */}
      {performers ? (
        <>
          <Row>
            {performers.result.map((performer) => (
              <Col sm={6} md={6} l={4} xl={3} key={performer._id}>
                <ResultItem performer={performer} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            fetchPerformers={fetchPerformers}
            changePage={changePage}
          />
        </>
      ) : (
        <h1 className="align-text-center">Noting To Show</h1>
      )}
    </>
  );
};

export default Results;
