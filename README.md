# LOVIE Premium Motion (Remotion)

Animação premium da marca LOVIE AGÊNCIA com construção tipográfica progressiva inspirada na logo original (L, O vazado, V, I, E serifado, traço inferior, detalhe superior e subtítulo AGÊNCIA).

## Como rodar

```bash
npm install
npm run start
```

## Render

```bash
npm run render
```

Saída esperada:

- `out/lovie-premium.mp4`

## Estrutura

- `src/compositions/LoviePremium.tsx`: timeline principal (7 segundos @ 30fps)
- `src/components/Background.tsx`: fundo azul marinho com profundidade sutil
- `src/components/WordConstruction.tsx`: construção vetorial da palavra LOVIE
- `src/components/TopDetail.tsx`: traço superior + coração temporário elegante
- `src/components/BaselineStroke.tsx`: traço inferior condutor
- `src/components/SubtitleAgencia.tsx`: entrada final discreta de `. AGÊNCIA`
- `src/components/palette.ts`: tokens de cor

## Ajustes rápidos

- Duração: `LOVIE_DURATION` em `LoviePremium.tsx`
- Cores: `src/components/palette.ts`
- Timing: ranges de `interpolate()` nos componentes
