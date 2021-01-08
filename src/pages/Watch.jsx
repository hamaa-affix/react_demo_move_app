import React from "react";

//component
import Layout from "../components/layouts/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import SideList from "../components/SideList/SideList";

const Watch = () => {
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
