import React, { useContext, useEffect, useState } from "react";
import { feachPopularData } from "../apis/index";
import { Store } from "../store/index";
//componets
import Layout from "../components/layouts/Layout";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    //mount時のみ動作させる
    feachPopularData().then((res) => {
      // setMovie(res.data);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items }
      });
    });
  }, []);
  return (
    <>
      <Layout>
        <VideoGrid>
          {globalState.popular &&
            globalState.popular.map((popular) => {
              console.log(popular);
              return (
                <VideoGridItem
                  key={popular.id}
                  id={popular.id}
                  src={popular.snippet.thumbnails.standard.url}
                  title={popular.snippet.title}
                />
              );
            })}
        </VideoGrid>
        <div>top page</div>
      </Layout>
    </>
  );
};

export default Top;
