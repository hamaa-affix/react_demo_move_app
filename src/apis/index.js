import axios from "axios";

const youtube = axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3"
});

//top pageのトレンドリスト用のメソッド
export const feachPopularData = async () => {
  //axios createで作成したyoutubeインスタンスにてgetメソッドを使用しdataを取得していく
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      maxResults: 40,
      key: KEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular"
    }
  });
};
