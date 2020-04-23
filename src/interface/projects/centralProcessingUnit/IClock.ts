export interface IClockProps {
  runCPU: (callBack: (isRestart?: boolean) => void) => void;
  currentTime: (time: number) => void;
}

export interface IClockState {
  clockIncerementTics: {x: number, y: number}
}