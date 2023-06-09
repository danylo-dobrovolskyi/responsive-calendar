export interface Interval {
  bt: number;
  et: number;
}

export interface DayData {
  [key: string]: Interval[];
}

export interface WeeklySchedulerProps {
  initialData: DayData;
  onSaveChanges: (data: DayData) => void;
}

export interface DayRowProps {
  day: string;
  data: DayData;
  setData: React.Dispatch<React.SetStateAction<DayData>>;
  isMouseDown: boolean;
  setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HourCellProps {
  day: string;
  bt: number;
  et: number;
  data: DayData;
  setData: React.Dispatch<React.SetStateAction<DayData>>;
  isMouseDown: boolean;
  setIsMouseDown: React.Dispatch<React.SetStateAction<boolean>>;
}
