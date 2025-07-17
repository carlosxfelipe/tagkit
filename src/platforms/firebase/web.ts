import { initializeApp, getApps } from "firebase/app";
import {
  getAnalytics,
  logEvent as firebaseLogEvent,
  isSupported,
} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "...",
};

// Garante que o app só seja inicializado uma vez
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let analyticsInstance: ReturnType<typeof getAnalytics> | null = null;

isSupported().then((supported) => {
  if (supported) {
    analyticsInstance = getAnalytics(app);
  } else {
    console.warn("[tagkit] Firebase Analytics not supported in this browser");
  }
});

export function logEvent(eventName: string, payload?: Record<string, any>) {
  if (!analyticsInstance) return;
  try {
    firebaseLogEvent(analyticsInstance, eventName, payload);
  } catch (e) {
    console.warn(`[tagkit] Firebase Web logEvent failed: ${eventName}`, e);
  }
}
