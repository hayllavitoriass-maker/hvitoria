import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../components/Background';
import {WordConstruction} from '../components/WordConstruction';
import {TopDetail} from '../components/TopDetail';
import {BaselineStroke} from '../components/BaselineStroke';
import {SubtitleAgencia} from '../components/SubtitleAgencia';

export const LOVIE_WIDTH = 1920;
export const LOVIE_HEIGHT = 1080;
export const LOVIE_FPS = 30;
export const LOVIE_DURATION = 210; // 7s

export const LoviePremiumComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const finalHoldOpacity = interpolate(frame, [170, 198, 210], [0.96, 1, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{opacity: finalHoldOpacity}}>
      <Background />
      <Sequence from={0} durationInFrames={LOVIE_DURATION}>
        <WordConstruction />
      </Sequence>
      <Sequence from={0} durationInFrames={LOVIE_DURATION}>
        <TopDetail />
      </Sequence>
      <Sequence from={0} durationInFrames={LOVIE_DURATION}>
        <BaselineStroke />
      </Sequence>
      <Sequence from={0} durationInFrames={LOVIE_DURATION}>
        <SubtitleAgencia />
      </Sequence>
    </AbsoluteFill>
  );
};
