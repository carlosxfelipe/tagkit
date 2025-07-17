type EventPayload = Record<string, any>;

export function logEvent(eventName: string, payload?: EventPayload) {
  if (__DEV__) {
    console.log(`[tagkit] Event: ${eventName}`, payload ?? {});
  }

  // Futuro: enviar para Firebase, UXCam, Datadog, etc.
}
