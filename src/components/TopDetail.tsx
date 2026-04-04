import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const TopDetail: React.FC = () => {
  const frame = useCurrentFrame();

  const heartDraw = interpolate(frame, [90, 132], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const heartOpacity = interpolate(frame, [90, 142, 172], [0, 0.86, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const finalStroke = interpolate(frame, [154, 194], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.18, 0.8, 0.2, 1),
  });

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', pointerEvents: 'none'}}>
      <svg width={1500} height={650} viewBox="0 0 1400 580" fill="none">
        <path
          d="M926 386 C935 301 947 246 960 206 C973 164 989 131 1006 126 C1017 123 1023 130 1022 140 C1020 151 1010 160 994 163 C1008 171 1028 173 1035 184 C1040 191 1038 198 1031 202 C1019 209 996 208 973 202"
          stroke={palette.logoBlue}
          strokeWidth={8.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={900}
          strokeDashoffset={900 * (1 - finalStroke)}
          opacity={interpolate(frame, [150, 186], [0.2, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
        />
        <path
          d="M995 120 C995 111 1002 104 1011 104 C1019 104 1026 110 1026 118 C1026 131 1012 137 1011 149 C1010 137 996 131 996 118"
          stroke={palette.logoBlueDim}
          strokeWidth={4.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={200}
          strokeDashoffset={200 * (1 - heartDraw)}
          opacity={heartOpacity}
        />
      </svg>
    </AbsoluteFill>
  );
};
