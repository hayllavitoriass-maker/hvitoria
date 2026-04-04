import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const BaselineStroke: React.FC = () => {
  const frame = useCurrentFrame();

  const draw = interpolate(frame, [62, 130], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 0.7, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <svg width={1500} height={650} viewBox="0 0 1400 580" fill="none">
        <path
          d="M184 388 C312 408 450 426 620 428 C754 430 870 418 946 406"
          stroke={palette.logoBlue}
          strokeWidth={12.5}
          strokeLinecap="round"
          strokeDasharray={1040}
          strokeDashoffset={1040 * (1 - draw)}
          opacity={interpolate(frame, [62, 120, 210], [0.18, 0.92, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })}
        />
      </svg>
    </AbsoluteFill>
  );
};
