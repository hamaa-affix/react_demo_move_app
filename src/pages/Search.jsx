import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Store } from "../store/index";

//components
import VideoGrid from "../components/VideoGrid/VideoGrid";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem";
import Layout from "../components/layouts/Layout";
import { feachSearchData } from "../apis/index";

const Search = () => {
  //routeオブジェクトからquery paramaterを取得する
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store);
  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    console.log(query);
    if (query) {
      await feachSearchData(query).then((res) => {
        //console.log(res.data.items);
        setGlobalState({
          type: "SET_SEARCHED",
          payload: { searched: res.data.items }
        });
      });
    }
  };

  useEffect(() => {
    setSearchResult();
  }, [location.search]);
  return (
    <>
      <Layout>
        <VideoGrid>
          {globalState.searched ? (
            globalState.searched.map((search) => {
              return (
                <VideoGridItem
                  id={search.id.videoId}
                  key={search.id.videoId}
                  src={search.snippet.thumbnails.medium.url}
                  title={search.snippet.title}
                />
              );
            })
          ) : (
            <span>no data</span>
          )}
        </VideoGrid>
        <div>search component</div>
      </Layout>
    </>
  );
};

export default Search;
