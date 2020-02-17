export interface IResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnailList;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBoardcastContent: string;
    localized: { title: string, description: string };
    defaultAudioLanguage: string;
  };
  statistics: IStatistics;
}

export interface IThumbnailList {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard: IThumbnail;
  maxres: IThumbnail;
}
export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
