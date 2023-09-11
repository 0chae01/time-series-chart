export interface dataPieceType {
  id: string;
  value_area: number;
  value_bar: number;
}

export type responseDataType = Record<string, dataPieceType>;

export interface chartDataType {
  id: string;
  value_area: number;
  value_bar: number;
  time: string;
  date: string;
}
