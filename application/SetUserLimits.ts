import { NutrientLimits } from '../domain/User';

export interface SetUserLimitsInput {
  userId: string;
  limits: NutrientLimits;
}

export interface SetUserLimitsOutput {
  success: boolean;
  message: string;
}

export class SetUserLimits {
  // Implementação do caso de uso
  execute(input: SetUserLimitsInput): SetUserLimitsOutput {
    // ... lógica de configuração
    return {
      success: true,
      message: 'Limites diários atualizados com sucesso!',
    };
  }
}
