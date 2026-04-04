import {AbsoluteFill} from 'remotion';
import {palette} from './palette';

export const Background = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: palette.navy,
        backgroundImage: `radial-gradient(circle at 26% 30%, ${palette.glow} 0%, rgba(0, 0, 0, 0) 48%), linear-gradient(160deg, ${palette.navySoft} 0%, ${palette.navy} 72%)`,
      }}
    />
  );
};
