import * as d3 from "d3";
import { easeInterpolate } from "../ani/AniCreator";
export function customInOut(
  time: [number, number, number, number],
  range: [number, number] = [0, 1],
  interruption = [d3.easeCubicOut, d3.easeCubicOut]
) {
  const scaleIn = d3
    .scaleLinear([time[0], time[1]], range)
    .interpolate(easeInterpolate(interruption[0]));
  const scaleOut = d3
    .scaleLinear([time[3], time[2]], range)
    .interpolate(easeInterpolate(interruption[1]));

  return (normalizedTime: number) => {
    if (normalizedTime < time[0]) {
      return range[0];
    } else if (normalizedTime > time[3]) {
      return range[0];
    } else if (normalizedTime < time[1]) {
      return scaleIn(normalizedTime);
    } else if (normalizedTime > time[2]) {
      return scaleOut(normalizedTime);
    } else {
      return range[1];
    }
  };
}
export * as ease from "d3-ease";
