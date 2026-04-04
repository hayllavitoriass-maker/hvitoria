import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const SubtitleAgencia: React.FC = () => {
  const frame = useCurrentFrame();

  const reveal = interpolate(frame, [156, 198], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.2, 0.8, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
      <div
        style={{
          marginTop: 168,
          fontFamily: "'Montserrat', 'Avenir Next', 'Helvetica Neue', sans-serif",
          letterSpacing: 7,
          fontWeight: 500,
          fontSize: 28,
          color: palette.logoBlueDim,
          opacity: reveal,
          transform: `translateY(${interpolate(reveal, [0, 1], [8, 0])}px)`,
          filter: `blur(${interpolate(reveal, [0, 1], [1, 0])}px)`,
        }}
      >
        AGÊNCIA
      </div>
    </AbsoluteFill>
  );
};
