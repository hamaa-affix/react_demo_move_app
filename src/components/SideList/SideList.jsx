import React, { useContext, useEffect } from "react";
import { feachRelatedData } from "../../apis/index";
import { Store } from "../../store/index";
import Style from "./SideList.module.scss";

//components
import SideListItem from "../SideListItem/SideListItem";
const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);

  //globalStateの更新
  const setRelatedVideo = async (id) => {
    await feachRelatedData(id).then((res) => {
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: res.data.items }
      });
      //console.log("related", res.data.items);
      console.log(globalState.related);
    });
  };
  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
  }, [globalState.selected]); //glogalState.selectedを渡すことで動画をさ読み込む度にuseEffectの処理が走る

  return (
    <>
      <div className={Style.sidenav}>
        {globalState.related ? (
          globalState.related.map((video) => {
            return (
              <SideListItem
                id={video.id.videoId}
                key={video.id.videoId}
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
            );
          })
        ) : (
          <span>no data</span>
        )}
      </div>
    </>
  );
};

export default SideList;
