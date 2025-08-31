# NutriControl PWA

NutriControl PWA é um aplicativo progressivo voltado para pessoas em tratamento dialítico, permitindo o controle diário do consumo de nutrientes críticos como potássio, fósforo e proteína. O app foi desenvolvido com foco em simplicidade, privacidade e autonomia, sem necessidade de conexão com APIs externas.

## Funcionalidades
- **Login:** acesso simples, apenas nome e e-mail.
- **Configurações:** definição dos limites diários de nutrientes e alternância entre tema claro/escuro.
- **Registro de Consumo:** escolha do alimento, quantidade consumida e cálculo automático dos nutrientes ingeridos.
- **Progresso Diário:** barras de progresso para cada nutriente, indicando proximidade dos limites definidos.
- **Histórico:** visualização dos registros de consumo por dia.

## Arquitetura
O projeto segue o padrão Domain Driven Design (DDD), organizado em:
- `domain`: entidades e objetos de valor (User, Food, Consumption, NutrientLimits)
- `application`: casos de uso (registro de consumo, configuração de limites, alteração de tema)
- `infrastructure`: persistência local e base de dados de alimentos (`food_database.json`)
- `presentation`: componentes React e páginas

## Como executar

### Pré-requisitos
- Docker instalado

### Passos
1. **Build da imagem Docker:**
   ```sh
   docker build -t nutricontrol-pwa .
   ```
2. **Rodar o container:**
   ```sh
   docker run -p 5173:5173 -v $(pwd):/app nutricontrol-pwa
   ```
3. **Acessar o app:**
   Abra o navegador e acesse [http://localhost:5173](http://localhost:5173)

### Estrutura de dados
A base de alimentos está em `infrastructure/food_database.json`. Para adicionar ou editar alimentos, basta modificar esse arquivo.

### Observações
- Todas as mensagens exibidas para o usuário estão em português do Brasil.
- O app funciona totalmente offline após o primeiro acesso.

## Contribuição
Sugestões e melhorias são bem-vindas! Abra uma issue ou envie um pull request.
