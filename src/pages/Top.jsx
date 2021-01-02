import React, { useContext, useEffect, useState } from "react";
import { feachPopularData } from "../apis/index";
import { Store } from "../store/index";
//componets
import Layout from "../components/layouts/Layout";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    //mount時のみ動作させる
    feachPopularData().then((res) => {
      // setMovie(res.data);
      console.log(res.data.items);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items }
      });
    });
  }, []);
  return (
    <>
      <Layout>
        <div>top page</div>
      </Layout>
    </>
  );
};

export default Top;
