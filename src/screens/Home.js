import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Results from "../components/Results";

const Home = () => {
  const [performers, setPerformers] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const fetchPerformers = async (page) => {
    let {
      data: { Response },
    } = await axios.post(
      `https://api.devlive101.net/wauth/search/v1/api/artistprofile/filtermultipleprofile?limit=4&page=${page}`,
      {
        event_category: ["private_event"],
        genre_category: null,
        artist_category: ["singer"],
        travel_city: null,
        gender: null,
        languages: null,
      }
    );
    console.log("data", Response);
    setPerformers(Response);
    setPages(Math.floor(Response.count / 4));
  };
  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };
  useEffect(() => {
    fetchPerformers(page);
  }, [page]);
  return (
    <>
      <Filter />
      <Results
        performers={performers}
        pages={pages}
        page={page}
        fetchPerformers={fetchPerformers}
        changePage={changePage}
      />
    </>
  );
};

export default Home;
