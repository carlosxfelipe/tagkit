import { Platform } from "react-native";
import { logEvent as logWeb } from "../platforms/firebase/web";
import { logEvent as logNative } from "../platforms/firebase/native";

export function logEvent(eventName: string, payload?: Record<string, any>) {
  if (__DEV__) console.log(`[tagkit] Event: ${eventName}`, payload ?? {});

  try {
    if (Platform.OS === "web") {
      logWeb(eventName, payload);
    } else {
      logNative(eventName, payload);
    }
  } catch (e) {
    console.warn("[tagkit] Firebase logEvent failed", e);
  }
}
