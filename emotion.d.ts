import '@emotion/react';
import { Theme as EmotionTheme } from 'components/theme';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
