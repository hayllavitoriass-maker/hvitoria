import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {palette} from './palette';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const vignetteOpacity = interpolate(frame, [0, durationInFrames * 0.35, durationInFrames], [0.2, 0.35, 0.26]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 45%, ${palette.navy} 0%, ${palette.navyDepth} 78%)`,
      }}
    >
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 62%)',
          opacity: vignetteOpacity,
          mixBlendMode: 'screen',
        }}
      />
    </AbsoluteFill>
  );
};
