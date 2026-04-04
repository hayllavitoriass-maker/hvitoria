import {interpolate, Easing, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const TopDetail = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [84, 136], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const heart = interpolate(frame, [96, 126, 150], [0, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <svg viewBox="0 0 1100 560" style={{width: 1180, height: 580, position: 'absolute'}}>
      <path
        d="M477 154 C504 120 546 122 567 154"
        fill="none"
        stroke={palette.logoStrong}
        strokeWidth={2}
        strokeLinecap="round"
        style={{strokeDasharray: 180, strokeDashoffset: 180 * (1 - draw), opacity: 0.9}}
      />
      <path
        d="M540 136 C533 124 514 124 514 141 C514 156 532 166 540 174 C548 166 566 156 566 141 C566 124 547 124 540 136 Z"
        fill={palette.logoStrong}
        style={{opacity: heart * 0.88}}
      />
    </svg>
  );
};
