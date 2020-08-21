export const lerp = (v0: number, v1: number, t: number) =>
  (1 - t) * v0 + t * v1;
