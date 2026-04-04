# LOVIE Premium Motion (Remotion)

Animação de branding premium para a marca LOVIE AGÊNCIA, com formação progressiva da palavra, detalhe superior poético e entrada sutil de subtítulo.

## Como rodar

```bash
npm install
npm run start
```

## Render

```bash
npm run render
```

## Estrutura

- `src/compositions/LoviePremium.tsx`: timeline principal (7 segundos @ 30fps)
- `src/components/Background.tsx`: fundo azul marinho com profundidade sutil
- `src/components/WordConstruction.tsx`: construção real da palavra LOVIE por traços + reveals
- `src/components/TopDetail.tsx`: coração temporário que resolve para marca final superior
- `src/components/BaselineStroke.tsx`: traço inferior condutor
- `src/components/SubtitleAgencia.tsx`: entrada final de "AGÊNCIA"

## Ajustes rápidos

- Duração: `LOVIE_DURATION` em `LoviePremium.tsx`
- Cores: `src/components/palette.ts`
- Timing por elemento: ranges de `interpolate()` em cada componente
