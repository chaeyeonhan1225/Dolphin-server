export interface BusArriveInfo {
  carNo1: number | string;
  carNo2: number | string;
  min1: number;
  min2: number;
  station1: number;
  station2: number;
  lowplate1: boolean;
  lowplate2: boolean;
}

export interface BusInfo {
  carno: string;
  gpsym: string;
  lat: number;
  lin: number;
  nodeid: number;
  bstopnm: string;
}

export interface DepartmentInfo {
  type: string;
  time: string;
}

export enum TimeTableType {
  HOLIDAY = 'HOLIDAY',
  SATURDAY = 'SATURDAY',
  NORMAL = 'NORMAL',
}
