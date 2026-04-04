import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const SubtitleAgencia: React.FC = () => {
  const frame = useCurrentFrame();
  const reveal = interpolate(frame, [162, 204], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 0.74, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <svg width={1500} height={650} viewBox="0 0 1400 580" fill="none">
        <g
          opacity={reveal}
          style={{
            transform: `translateY(${interpolate(reveal, [0, 1], [7, 0])}px)`,
            filter: `blur(${interpolate(reveal, [0, 1], [1.2, 0])}px)`,
          }}
        >
          <circle cx="968" cy="420" r="2.2" fill={palette.logoBlue} />
          <text
            x="986"
            y="430"
            fontFamily="'Montserrat', 'Avenir Next', 'Helvetica Neue', sans-serif"
            fontSize="49"
            letterSpacing="12"
            fill={palette.logoBlue}
            fontWeight={400}
          >
            AGÊNCIA
          </text>
        </g>
      </svg>
    </AbsoluteFill>
  );
};
