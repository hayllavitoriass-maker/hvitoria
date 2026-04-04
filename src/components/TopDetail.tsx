import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const TopDetail: React.FC = () => {
  const frame = useCurrentFrame();

  const heartDraw = interpolate(frame, [72, 106], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const heartOpacity = interpolate(frame, [76, 128, 156], [0, 0.75, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const finalMark = interpolate(frame, [148, 186], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <svg width={1100} height={400} viewBox="0 0 1100 400" fill="none">
        <path
          d="M610 118 C610 106 618 100 627 100 C637 100 643 106 643 114 C643 132 623 138 627 155 C631 138 611 132 611 114"
          stroke={palette.logoBlueDim}
          strokeWidth={3.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={260}
          strokeDashoffset={260 * (1 - heartDraw)}
          opacity={heartOpacity}
        />
        <circle
          cx="627"
          cy="120"
          r={interpolate(finalMark, [0, 1], [1, 6.5])}
          fill={palette.logoBlue}
          opacity={interpolate(finalMark, [0, 1], [0, 1])}
        />
      </svg>
    </AbsoluteFill>
  );
};
