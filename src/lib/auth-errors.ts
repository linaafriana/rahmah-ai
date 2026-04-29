import { id as t } from "@/lib/i18n/id";

/**
 * Maps Firebase Auth error codes to friendly Bahasa Indonesia messages.
 * See: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
 */
export function authErrorMessage(err: unknown): string {
  const e = t.signIn.errors;
  if (!err || typeof err !== "object") return e.generic;
  const code = (err as { code?: string }).code;
  if (typeof code !== "string") return e.generic;

  switch (code) {
    case "auth/invalid-email":
      return e.invalidEmail;
    case "auth/user-not-found":
    case "auth/invalid-credential":
      return e.userNotFound;
    case "auth/wrong-password":
      return e.wrongPassword;
    case "auth/email-already-in-use":
      return e.emailInUse;
    case "auth/weak-password":
      return e.weakPassword;
    case "auth/too-many-requests":
      return e.tooManyRequests;
    case "auth/network-request-failed":
      return e.networkError;
    case "auth/popup-blocked":
      return e.popupBlocked;
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return e.popupClosed;
    default:
      return e.generic;
  }
}
