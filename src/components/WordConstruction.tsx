import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {palette} from './palette';

type StrokeGuide = {d: string; from: number; to: number; width?: number};
type FillReveal = {id: string; from: number; to: number; x: number; y: number; w: number; h: number};

const guides: StrokeGuide[] = [
  {d: 'M180 165 L180 386 L445 424', from: 2, to: 42, width: 7},
  {d: 'M495 286 C495 214 550 170 620 170 C690 170 744 214 744 286 C744 359 690 402 620 402 C550 402 495 359 495 286', from: 18, to: 76, width: 5.5},
  {d: 'M795 170 L897 386 L961 170', from: 42, to: 96, width: 6},
  {d: 'M989 382 L989 178', from: 72, to: 102, width: 6},
  {d: 'M1045 170 L1045 385 M1045 170 L1215 170 M1045 287 L1190 287 M1045 385 L1215 385', from: 82, to: 124, width: 5.4},
];

const reveals: FillReveal[] = [
  {id: 'l', from: 24, to: 72, x: 158, y: 144, w: 306, h: 300},
  {id: 'o', from: 40, to: 90, x: 474, y: 140, w: 284, h: 280},
  {id: 'v', from: 62, to: 110, x: 776, y: 146, w: 196, h: 266},
  {id: 'i', from: 86, to: 126, x: 972, y: 150, w: 48, h: 244},
  {id: 'e', from: 96, to: 136, x: 1032, y: 150, w: 204, h: 246},
];

const fillPath =
  'M180 165 L224 165 L224 376 L452 410 L448 424 L180 386 Z ' +
  'M620 170 C690 170 744 214 744 286 C744 359 690 402 620 402 C550 402 495 359 495 286 C495 214 550 170 620 170 Z ' +
  'M620 205 C577 205 544 237 544 286 C544 335 577 367 620 367 C663 367 696 335 696 286 C696 237 663 205 620 205 Z ' +
  'M795 170 L843 170 L929 357 L961 170 L1003 170 L948 386 L900 386 Z ' +
  'M989 178 L1031 178 L1031 382 L989 382 Z ' +
  'M1045 170 L1216 170 L1216 205 L1088 205 L1088 280 L1186 280 L1186 311 L1088 311 L1088 349 L1210 349 L1210 385 L1045 385 Z';

export const WordConstruction: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const settle = spring({frame: frame - 126, fps, config: {damping: 190, stiffness: 80, mass: 0.9}});
  const y = interpolate(settle, [0, 1], [10, 0]);

  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', transform: `translateY(${y}px)`}}>
      <svg width={1500} height={650} viewBox="0 0 1400 580" fill="none">
        <defs>
          <clipPath id="logo-fill-reveal">
            {reveals.map((r) => {
              const prog = interpolate(frame, [r.from, r.to], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: Easing.bezier(0.26, 0.03, 0.12, 0.98),
              });
              return <rect key={r.id} x={r.x} y={r.y} width={r.w * prog} height={r.h} rx={8} />;
            })}
          </clipPath>
          <filter id="construction-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {guides.map((guide) => {
          const draw = interpolate(frame, [guide.from, guide.to], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.22, 0.65, 0.23, 1),
          });
          return (
            <path
              key={guide.d}
              d={guide.d}
              stroke={palette.logoBlue}
              strokeWidth={guide.width ?? 5}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={1400}
              strokeDashoffset={1400 * (1 - draw)}
              opacity={interpolate(frame, [guide.from, guide.to + 24], [0.1, 0.88], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              })}
              filter="url(#construction-glow)"
            />
          );
        })}

        <path
          d={fillPath}
          fill={palette.logoBlue}
          fillRule="evenodd"
          clipPath="url(#logo-fill-reveal)"
          opacity={interpolate(frame, [28, 138], [0.12, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}
          style={{
            filter: `blur(${interpolate(frame, [30, 132], [1.6, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}px)`,
          }}
        />
      </svg>
    </AbsoluteFill>
  );
};
