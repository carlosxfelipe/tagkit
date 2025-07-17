# TagKit

TagKit é uma biblioteca agnóstica para rastreamento de eventos em aplicações React (Web) e React Native (CLI).

Ela serve como uma camada de abstração para registrar eventos de analytics, facilitando a integração com ferramentas como Firebase, UXCam, Datadog, entre outras.

## Instalação

```bash
npm install tagkit
```

## Desenvolvimento local

Para testar localmente, gere um pacote `.tgz` com `npm pack` e instale no app consumidor:

```bash
# dentro da pasta do tagkit
npm run build
npm pack
```

O comando acima vai gerar um arquivo `.tgz` (ex: `tagkit-1.0.0.tgz`).

Depois, no app consumidor:

```bash
npm install ../tagkit/tagkit-1.0.0.tgz
```

Sempre que modificar o código do `TagKit`, repita os passos:

1. `npm run build`
2. `npm pack`
3. Atualize a instalação no app, se necessário

> Dica: o nome do arquivo `.tgz` depende da versão do `package.json`.

## Uso

```ts
import { logEvent } from "tagkit";

logEvent("user_signup", { method: "email" });
```

## API

### `logEvent(eventName: string, payload?: Record<string, any>): void`

Registra um evento com nome e dados opcionais. Atualmente imprime no console em modo desenvolvimento; integrações com provedores serão adicionadas gradualmente.

## Dependências necessárias nos projetos que usam TagKit

Para que o `TagKit` funcione corretamente com Firebase Analytics, os projetos consumidores devem instalar os seguintes pacotes, de acordo com a plataforma:

### React (Web)

```bash
npm install firebase
```

> Certifique-se de que o Firebase está corretamente configurado no ambiente Web, incluindo o `measurementId` no `firebaseConfig`.

### React Native (CLI)

```bash
npm install @react-native-firebase/app @react-native-firebase/analytics
```

Além disso, é necessário:

- Adicionar `google-services.json` no projeto Android
- Adicionar `GoogleService-Info.plist` no projeto iOS
- Seguir as instruções oficiais de configuração do Firebase:
  https://rnfirebase.io/

## Roadmap

- Suporte nativo a Firebase Analytics
- Integração com UXCam e Datadog
- Sistema de plugins para múltiplos destinos
- Middleware para interceptar / transformar eventos
- Tipagem forte de eventos

## Build

Compile o código TypeScript para a pasta `dist/`:

```bash
npm run build
```

## Licença

MIT
