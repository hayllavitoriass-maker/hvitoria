import {interpolate, Easing, useCurrentFrame} from 'remotion';
import {palette} from './palette';

const LETTER_PATHS = [
  'M154 388 L154 196 L194 196 L194 350 L254 350 L254 388 Z',
  'M274 292 C274 228 323 182 387 182 C451 182 500 228 500 292 C500 356 451 402 387 402 C323 402 274 356 274 292 Z M316 292 C316 336 346 366 387 366 C428 366 458 336 458 292 C458 248 428 218 387 218 C346 218 316 248 316 292 Z',
  'M522 196 L592 388 L640 388 L708 196 L664 196 L616 338 L566 196 Z',
  'M736 196 L736 388 L778 388 L778 196 Z',
  'M816 196 L816 388 L942 388 L942 350 L856 350 L856 312 L926 312 L926 276 L856 276 L856 234 L948 234 L948 196 Z',
];

export const WordConstruction = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [8, 118], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.22, 0.9, 0.27, 1),
  });
  const fill = interpolate(frame, [70, 154], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.3, 0.05, 0.2, 1),
  });

  return (
    <svg viewBox="0 0 1100 560" style={{width: 1180, height: 580}}>
      <defs>
        <linearGradient id="lovieStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.logo} />
          <stop offset="100%" stopColor={palette.logoStrong} />
        </linearGradient>
      </defs>
      {LETTER_PATHS.map((d, idx) => {
        const segStart = 0.08 + idx * 0.11;
        const segEnd = segStart + 0.22;
        const segProgress = Math.max(0, Math.min(1, (draw - segStart) / (segEnd - segStart)));
        const strokeLength = 520;

        return (
          <g key={d}>
            <path
              d={d}
              fill="none"
              stroke="url(#lovieStroke)"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: strokeLength,
                strokeDashoffset: strokeLength * (1 - segProgress),
                filter: 'drop-shadow(0 0 7px rgba(190,220,255,0.25))',
              }}
            />
            <path
              d={d}
              fill={palette.logo}
              style={{
                opacity: fill,
                clipPath: `inset(0 ${100 - fill * 100}% 0 0)`,
                filter: 'drop-shadow(0 2px 6px rgba(180,210,255,0.15))',
              }}
            />
          </g>
        );
      })}
    </svg>
  );
};
