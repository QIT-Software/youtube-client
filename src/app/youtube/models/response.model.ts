import { IResponseItem } from './response-item.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: IResponseItem[];
  nextPageToken?: string;
  regionCode?: string;
}
