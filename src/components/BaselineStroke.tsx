import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const BaselineStroke: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [96, 150], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <svg width={1100} height={400} viewBox="0 0 1100 400" fill="none">
        <path
          d="M212 346 C312 358 424 360 548 357 C672 354 796 349 914 344"
          stroke={palette.logoBlue}
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeDasharray={780}
          strokeDashoffset={780 * (1 - progress)}
          opacity={interpolate(frame, [96, 138, 220], [0, 0.95, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })}
        />
      </svg>
    </AbsoluteFill>
  );
};
