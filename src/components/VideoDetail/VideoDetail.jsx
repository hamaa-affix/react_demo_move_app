import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { feachSelectedData } from "../../apis/index";
import { Store } from "../../store/index";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  //useLocation urlからクエリパラメータを取得できる
  //現在のurlのパスやサーチパラメータお情報を取得できる
  const location = useLocation();

  //useEffect内部ではasync awaitを使用することができない
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    await feachSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      //dispatchでデータの更新を行う
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
      console.log("res", res);
    });
  };

  useEffect(() => {
    //locationからsearchParamsを取得するには　URLSearchParams（コンストラクター）にlocationオブジェクトを渡す必要がある
    setSelectedVideo();
  }, []);
  return (
    <>
      <div>Video Detai</div>
    </>
  );
};

export default VideoDetail;
