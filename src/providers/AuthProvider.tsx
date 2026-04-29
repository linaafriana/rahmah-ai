"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as fbSignOut,
  type User as FbUser,
} from "firebase/auth";
import { firebaseAuth, isFirebaseConfigured } from "@/lib/firebase/client";
import { migrateLocalDataToFirestore } from "@/lib/firebase/migration";

export type SessionUser = {
  uid: string;
  name: string;
  email: string | null;
  isMock: boolean;
};

type AuthContextValue = {
  user: SessionUser | null;
  loading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_KEY = "sakinah:user";

function toSessionUser(u: FbUser): SessionUser {
  return {
    uid: u.uid,
    name: u.displayName || (u.email ? u.email.split("@")[0] : "Sahabat"),
    email: u.email,
    isMock: false,
  };
}

function readMock(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(MOCK_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed?.name) return null;
    return {
      uid: parsed.uid ?? "mock-user",
      name: parsed.name,
      email: parsed.email ?? null,
      isMock: true,
    };
  } catch {
    return null;
  }
}

function writeMock(name: string, email: string | null) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    MOCK_KEY,
    JSON.stringify({ uid: "mock-user", name, email }),
  );
}

function clearMock() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(MOCK_KEY);
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured || !firebaseAuth) {
      setUser(readMock());
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u ? toSessionUser(u) : null);
      setLoading(false);
      // Best-effort: migrate local data to Firestore on first sign-in.
      // Idempotent — guarded by sakinah:migratedFor:{uid} flag.
      if (u) void migrateLocalDataToFirestore(u.uid);
    });
    return () => unsub();
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,
      loading,
      configured: isFirebaseConfigured,
      async signIn(email, password) {
        if (firebaseAuth) {
          await signInWithEmailAndPassword(firebaseAuth, email, password);
          return;
        }
        const name = email.split("@")[0] || "Sahabat";
        writeMock(name, email);
        setUser({ uid: "mock-user", name, email, isMock: true });
      },
      async signUp(email, password) {
        if (firebaseAuth) {
          await createUserWithEmailAndPassword(firebaseAuth, email, password);
          return;
        }
        const name = email.split("@")[0] || "Sahabat";
        writeMock(name, email);
        setUser({ uid: "mock-user", name, email, isMock: true });
      },
      async signInWithGoogle() {
        if (firebaseAuth) {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(firebaseAuth, provider);
          return;
        }
        const mockName = "Sahabat";
        writeMock(mockName, null);
        setUser({
          uid: "mock-user",
          name: mockName,
          email: null,
          isMock: true,
        });
      },
      async signOut() {
        if (firebaseAuth) {
          await fbSignOut(firebaseAuth);
        } else {
          clearMock();
          setUser(null);
        }
      },
      async resetPassword(email) {
        if (!firebaseAuth) {
          // In mock mode there's no real account — just no-op success
          return;
        }
        await sendPasswordResetEmail(firebaseAuth, email);
      },
    };
  }, [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
