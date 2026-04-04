import {interpolate, Easing, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const BaselineStroke = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [112, 176], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.7, 0.2, 1),
  });

  return (
    <svg viewBox="0 0 1100 560" style={{width: 1180, height: 580, position: 'absolute'}}>
      <path
        d="M178 418 C322 454 622 454 942 410"
        fill="none"
        stroke={palette.logoStrong}
        strokeWidth={3}
        strokeLinecap="round"
        style={{
          strokeDasharray: 900,
          strokeDashoffset: 900 * (1 - progress),
          opacity: 0.9,
          filter: 'drop-shadow(0 0 6px rgba(191, 217, 255, 0.25))',
        }}
      />
    </svg>
  );
};
