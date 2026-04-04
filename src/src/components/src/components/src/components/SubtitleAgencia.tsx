import {interpolate, Easing, useCurrentFrame} from 'remotion';
import {palette} from './palette';

export const SubtitleAgencia = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [154, 184], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });
  const y = interpolate(frame, [154, 184], [12, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 218,
        width: '100%',
        textAlign: 'center',
        color: palette.subtitle,
        fontFamily: 'Times New Roman, Georgia, serif',
        letterSpacing: '0.42em',
        fontSize: 28,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      . AGÊNCIA
    </div>
  );
};
