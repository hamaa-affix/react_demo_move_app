import React, { useEffect, useState } from "react";
import { feachPopularData } from "../apis/index";
//componets
import Layout from "../components/layouts/Layout";

const Top = () => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    //mount時のみ動作させる
    feachPopularData().then((res) => {
      // setMovie(res.data);
      console.log(res.data.items);
      setMovie(res.data.items);
    });
  }, []);
  return (
    <>
      <Layout>
        <div>top page</div>
      </Layout>
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.id}</div>;
      })}
    </>
  );
};

export default Top;
