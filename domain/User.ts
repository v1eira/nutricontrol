export interface User {
  id: string;
  name: string;
  email: string;
  dailyLimits: NutrientLimits;
  theme: 'light' | 'dark';
}

export interface NutrientLimits {
  potassium: number;
  phosphorus: number;
  protein: number;
}
