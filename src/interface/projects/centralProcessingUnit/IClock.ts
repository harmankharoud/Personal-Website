export interface IClockProps {
  runCPU: (callBack: (isReset?: boolean, isPausing?: boolean) => void) => void;
  currentTime: (time: number) => void;
}

export interface IClockState {
  clockIncerementTics: {x: number, y: number}
}