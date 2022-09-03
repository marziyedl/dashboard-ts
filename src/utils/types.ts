export interface IusePost {
  url: string;
  callBack?: (res?: string) => void;
  body: object;
  showToast?: boolean;
  onError?: (err: any) => void;
}
export interface IusePatch {
  url: string;
  callBack?: (res?: string) => void;
  body: object;
  showToast?: boolean;
  onError?: (err: any) => void;
}
export interface IuseDelete {
  url: string;
  callBack?: (res?: string) => void;
  body: object;
  showToast?: boolean;
  onError?: (err: any) => void;
}

export interface IusePut {
  url: string;
  callBack?: (res?: string) => void;
  body: object;
  showToast?: boolean;
  onError?: (err: any) => void;
}

export type ResponseType = {
  data: any;
};
