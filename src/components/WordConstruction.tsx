import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {palette} from './palette';

type Segment = {
  d: string;
  start: number;
  end: number;
  width?: number;
};

const segments: Segment[] = [
  {d: 'M220 330 L220 190 L285 190', start: 6, end: 34},
  {d: 'M335 190 L385 330 L440 190', start: 18, end: 52},
  {d: 'M495 260 C495 215 530 185 575 185 C620 185 655 215 655 260 C655 305 620 335 575 335 C530 335 495 305 495 260', start: 28, end: 72},
  {d: 'M715 190 L715 330 M715 190 L780 190 M715 330 L780 330', start: 42, end: 82},
  {d: 'M840 190 L840 330 M840 190 L905 190 M840 260 L898 260 M840 330 L905 330', start: 52, end: 96},
];

const fillColumns = [
  {x: 194, w: 115, from: 44, to: 86},
  {x: 321, w: 140, from: 52, to: 94},
  {x: 482, w: 188, from: 62, to: 106},
  {x: 704, w: 85, from: 74, to: 116},
  {x: 830, w: 88, from: 82, to: 124},
];

export const WordConstruction: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const settle = spring({frame: frame - 112, fps, config: {damping: 200, stiffness: 90, mass: 0.85}});
  const settleY = interpolate(settle, [0, 1], [7, 0]);

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', transform: `translateY(${settleY}px)`}}>
      <svg width={1100} height={400} viewBox="0 0 1100 400" fill="none">
        <defs>
          <clipPath id="word-reveal">
            {fillColumns.map((column) => {
              const p = interpolate(frame, [column.from, column.to], [0, column.w], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: Easing.bezier(0.3, 0.02, 0.18, 1),
              });
              return <rect key={column.x} x={column.x} y={170} width={p} height={180} rx={10} />;
            })}
          </clipPath>
          <filter id="soft-glow" x="-100%" y="-100%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="2.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {segments.map((segment, index) => {
          const draw = interpolate(frame, [segment.start, segment.end], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          });
          const offset = 1000 * (1 - draw);
          const opacity = interpolate(frame, [segment.start, segment.start + 18, segment.end + 18], [0, 0.95, 0.4], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          });

          return (
            <path
              key={index}
              d={segment.d}
              stroke={palette.logoBlue}
              strokeWidth={segment.width ?? 5.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={1000}
              strokeDashoffset={offset}
              opacity={opacity}
              filter="url(#soft-glow)"
            />
          );
        })}

        <text
          x="550"
          y="320"
          textAnchor="middle"
          fontSize="200"
          fontWeight={500}
          letterSpacing="7"
          fontFamily="'Cormorant Garamond', 'Bodoni Moda', 'Times New Roman', serif"
          fill={palette.logoBlue}
          clipPath="url(#word-reveal)"
          opacity={interpolate(frame, [40, 120], [0.2, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
          style={{filter: `blur(${interpolate(frame, [50, 120], [1.4, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`}}
        >
          LOVIE
        </text>
      </svg>
    </AbsoluteFill>
  );
};
