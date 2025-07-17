import analytics from "@react-native-firebase/analytics";

export async function logEvent(
  eventName: string,
  payload?: Record<string, any>
): Promise<void> {
  try {
    await analytics().logEvent(eventName, payload);
  } catch (e) {
    console.warn(`[tagkit] Firebase Native logEvent failed: ${eventName}`, e);
  }
}
