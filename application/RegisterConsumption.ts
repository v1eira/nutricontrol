import { Consumption } from '../domain/Consumption';

export interface RegisterConsumptionInput {
  userId: string;
  foodId: number;
  amount: number;
  date: string;
}

export interface RegisterConsumptionOutput {
  success: boolean;
  message: string;
  consumption?: Consumption;
}

export class RegisterConsumption {
  // Implementação do caso de uso
  execute(input: RegisterConsumptionInput): RegisterConsumptionOutput {
    // ... lógica de registro
    return {
      success: true,
      message: 'Consumo registrado com sucesso!',
      consumption: {
        id: '1',
        userId: input.userId,
        foodId: input.foodId,
        amount: input.amount,
        date: input.date,
      },
    };
  }
}
