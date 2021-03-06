interface ISnippet {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: IThumbnailList;
  channelTitle?: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: { title: string, description: string };
  defaultAudioLanguage?: string;
}

export interface IThumbnailList {
  default?: IThumbnail;
  medium?: IThumbnail;
  high?: IThumbnail;
  standard?: IThumbnail;
  maxres?: IThumbnail;
}
export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
export interface IStatistics {
  viewCount?: string;
  likeCount?: string;
  dislikeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

export interface IResponseItem {
  kind: string;
  etag: string;
  id?: string | {
    kind?: string;
    videoId?: string;
  };
  snippet?: ISnippet;
  statistics?: IStatistics;
}
