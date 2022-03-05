import '@emotion/react';
import { Theme as EmotionTheme } from 'src/utils/theme';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
