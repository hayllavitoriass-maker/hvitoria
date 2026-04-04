import {Composition} from 'remotion';
import {LoviePremiumComposition, LOVIE_FPS, LOVIE_HEIGHT, LOVIE_WIDTH, LOVIE_DURATION} from './compositions/LoviePremium';

export const RemotionRoot = () => {
  return (
    <Composition
      id="LOVIEPremium"
      component={LoviePremiumComposition}
      durationInFrames={LOVIE_DURATION}
      fps={LOVIE_FPS}
      width={LOVIE_WIDTH}
      height={LOVIE_HEIGHT}
    />
  );
};
