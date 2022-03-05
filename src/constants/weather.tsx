import { WeatherSet } from 'src/models/weather';

import AngryIcon from '../../public/assets/images/image-weather-angry.svg';
import GoodIcon from '../../public/assets/images/image-weather-good.svg';
import SadIcon from '../../public/assets/images/image-weather-sad.svg';
import SosoIcon from '../../public/assets/images/image-weather-soso.svg';
import LonelyIcon from '../../public/assets/images/image-weather-lonely.svg';

const WEATHER: WeatherSet = {
  angry: {
    id: 'angry',
    name: '화남',
    icon: <AngryIcon />,
  },
  good: {
    id: 'good',
    name: '좋음',
    icon: <GoodIcon />,
  },
  sad: {
    id: 'sad',
    name: '슬픔',
    icon: <SadIcon />,
  },
  soso: {
    id: 'soso',
    name: '무난함',
    icon: <SosoIcon />,
  },
  lonely: {
    id: 'lonely',
    name: '외로움',
    icon: <LonelyIcon />,
  },
};

export default WEATHER;
