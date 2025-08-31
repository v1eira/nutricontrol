export interface Consumption {
  id: string;
  userId: string;
  foodId: number;
  amount: number; // em gramas
  date: string; // ISO
}
