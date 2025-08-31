export interface ChangeThemeInput {
  userId: string;
  theme: 'light' | 'dark';
}

export interface ChangeThemeOutput {
  success: boolean;
  message: string;
}

export class ChangeTheme {
  execute(input: ChangeThemeInput): ChangeThemeOutput {
    // ... lógica de alteração de tema
    return {
      success: true,
      message: input.theme === 'light' ? 'Tema claro ativado!' : 'Tema escuro ativado!',
    };
  }
}
