import {AbsoluteFill} from 'remotion';
import {Background} from '../components/Background';
import {WordConstruction} from '../components/WordConstruction';
import {TopDetail} from '../components/TopDetail';
import {BaselineStroke} from '../components/BaselineStroke';
import {SubtitleAgencia} from '../components/SubtitleAgencia';

export const LOVIE_WIDTH = 1920;
export const LOVIE_HEIGHT = 1080;
export const LOVIE_FPS = 30;
export const LOVIE_DURATION = 210;

export const LoviePremiumComposition = () => {
  return (
    <AbsoluteFill>
      <Background />

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <WordConstruction />
        <TopDetail />
        <BaselineStroke />
      </AbsoluteFill>

      <SubtitleAgencia />
    </AbsoluteFill>
  );
};
