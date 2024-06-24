export type File = {
  id: string;
  userId: string;
  name: string;
  date: string;
  text: string;
  // tags: string[];
  type: string;
};

export interface JsendSuccess<T = undefined> {
  status: 'success';
  data: T;
}

export interface JsendFail<T = undefined> {
  status: 'fail';
  data: T;
}

export interface JsendError<T = undefined> {
  status: 'error';
  message: string;
  data?: T;
  code?: number;
}
