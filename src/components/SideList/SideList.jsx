import Reacat, { useContext, useEffect } from "react";
import { feachRelatedData } from "../../apis/index";
import { Store } from "../../store/index";
const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);

  //globalStateの更新
  const setRelatedVideo = async (id) => {
    await feachRelatedData(id).then((res) => {
      setGlobalState({
        type: "SET_RELATED",
        payload: { popular: res.data.items }
      });
    });
  };
  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
  }, [globalState.selected]); //glogalState.selectedを渡すことで動画をさ読み込む度にuseEffectの処理が走る
  return (
    <>
      {golobalState.related ? (
        globalState.related.map(() => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnail.url}
              title={video.snippet.title}
            />
          );
        })
      ) : (
        <span>no data</span>
      )}
    </>
  );
};

export default SideList;
