import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Results from "../components/Results";

const Home = () => {
  const [performers, setPerformers] = useState(null);
  //   const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({
    event_category: ["private_event"],
    genre_category: null,
    artist_category: ["singer"],
    travel_city: null,
    gender: null,
    languages: null,
  });

  const fetchPerformers = async (page, body) => {
    let {
      data: { Response },
    } = await axios.post(
      `https://api.devlive101.net/wauth/search/v1/api/artistprofile/filtermultipleprofile?limit=4&page=${page}`,
      body
    );
    console.log("data", Response);
    setPerformers(Response);
    setPages(Math.floor(Response.count / 4));
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const fetchPerformersByPage = (page) => {
    fetchPerformers(page, body);
  };

  const handleBody = (tempBody) => {
    console.log("home", tempBody);
    console.log(Object.keys(tempBody));
    if (Object.keys(tempBody).length !== 0) {
      const newBody = {};
      for (const key in body) {
        newBody[key] = body[key];
      }
      for (const key in tempBody) {
        console.log("test", key, tempBody[key]);
        // setBody((prevState) => ({
        //   ...prevState,
        //   key: tempBody[key],
        // }));
        if (key === "artist_category") newBody[key] = [tempBody[key]];
        else if (key === "event_category") newBody[key] = [tempBody[key]];
        else newBody[key] = tempBody[key];
      }
      setBody((prevState) => ({
        ...prevState,
        ...newBody,
      }));
      console.log("mainObj", body);
      setPage(1);
      fetchPerformers(page, newBody);
    }
  };
  useEffect(() => {
    fetchPerformers(page, body);
  }, [page, body]);
  return (
    <>
      <Filter handleBody={handleBody} />
      <Results
        performers={performers}
        pages={pages}
        page={page}
        fetchPerformers={fetchPerformersByPage}
        changePage={changePage}
      />
    </>
  );
};

export default Home;
