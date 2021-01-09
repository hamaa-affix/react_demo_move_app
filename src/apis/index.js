import axios from "axios";

const youtube = axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3"
});

//共通params
const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video"
};

//top pageのトレンドリスト用のメソッド
export const feachPopularData = async () => {
  //axios createで作成したyoutubeインスタンスにてgetメソッドを使用しdataを取得していく
  return await youtube.get("/videos", {
    params: {
      //スプレッド構文でパラムス使用（コピー）
      ...params,
      chart: "mostPopular"
    }
  });
};

//動画詳細を取得する
export const feachSelectedData = async (id) => {
  return await youtube.get("videos", {
    params: {
      ...params,
      id
    }
  });
};

//関連データの取得ロジック
export const feachRelatedData = async (id) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id
    }
  });
};
