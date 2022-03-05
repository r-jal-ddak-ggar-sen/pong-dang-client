import React from 'react';

export type WeatherName =
  | 'angry'
  | 'good'
  | 'sad'
  | 'soso'
  | 'lonely';

interface WeatherItem {
  id: WeatherName;
  name: string;
  icon: React.ReactNode;
}

export type WeatherSet = Record<WeatherName, WeatherItem>;