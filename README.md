# TagKit

TagKit é uma biblioteca agnóstica para rastreamento de eventos em aplicações React e React Native.

Ela serve como uma camada de abstração para registrar eventos de analytics, facilitando a integração com ferramentas como Firebase, UXCam, Datadog, entre outras.

## Instalação

```bash
npm install tagkit
```

Ou, durante o desenvolvimento local:

```bash
npm link
```

## Uso

```ts
import { logEvent } from "tagkit";

logEvent("user_signup", { method: "email" });
```

## API

### `logEvent(eventName: string, payload?: Record<string, any>): void`

Registra um evento com nome e dados opcionais.

## Roadmap

- Suporte nativo a Firebase Analytics
- Integração com UXCam e Datadog
- Plugins para personalizar destinos
- Middleware para interceptar e modificar eventos

## Licença

MIT
