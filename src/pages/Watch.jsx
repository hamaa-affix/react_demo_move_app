import React, { useEffect, useContext } from "react";
import { Store } from "../store/index";
import { useLocation } from "react-router-dom";
import { feachSelectedData, feachRelatedData } from "../apis/index";

//component
import Layout from "../components/layouts/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import SideList from "../components/SideList/SideList";

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchPrams = new URLSearchParams(location.search);
    const id = searchPrams.get("v");
    if (id) {
      const [selected, related] = await Promise.all([
        feachSelectedData(id),
        feachRelatedData(id)
      ]);
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: selected.data.items.shift() }
      });
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: related.data.items }
      });

      //console.log("result", result);
    }
  };

  useEffect(() => {
    // eslint-disable-nextline react-hooks/exhaustive-deps
    setVideos();
  }, [location.search]);

  return (
    <>
      <Layout>
        <VideoDetail />
        <SideList />
      </Layout>
    </>
  );
};

export default Watch;
