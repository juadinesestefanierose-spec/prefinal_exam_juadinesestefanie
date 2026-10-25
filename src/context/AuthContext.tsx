import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

export interface DemoUser {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface SavedAccount {
  user: DemoUser;
  password: string;
}

interface AuthContextType {
  user: DemoUser | null;
  isLoggedIn: boolean;
  register: (name: string, email: string, password: string) => boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (updatedUser: DemoUser) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ACCOUNT_KEY = "jshop-demo-account";
const SESSION_KEY = "jshop-demo-session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<SavedAccount | null>(() => {
    try {
      const saved = localStorage.getItem(ACCOUNT_KEY);
      return saved ? (JSON.parse(saved) as SavedAccount) : null;
    } catch {
      return null;
    }
  });

  const [user, setUser] = useState<DemoUser | null>(() => {
    try {
      const savedAccount = localStorage.getItem(ACCOUNT_KEY);
      const savedSession = localStorage.getItem(SESSION_KEY);

      if (savedAccount && savedSession === "true") {
        return (JSON.parse(savedAccount) as SavedAccount).user;
      }
    } catch {
      return null;
    }

    return null;
  });

  useEffect(() => {
    if (account) {
      localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
    } else {
      localStorage.removeItem(ACCOUNT_KEY);
    }
  }, [account]);

  function register(name: string, email: string, password: string) {
    if (!name.trim() || !email.trim() || !password) {
      return false;
    }

    const newUser: DemoUser = {
      name: name.trim(),
      email: email.trim(),
      phone: "",
      address: "",
    };

    const newAccount: SavedAccount = {
      user: newUser,
      password,
    };

    setAccount(newAccount);
    setUser(newUser);
    localStorage.setItem(SESSION_KEY, "true");

    return true;
  }

  function login(email: string, password: string) {
    if (
      !account ||
      account.user.email.toLowerCase() !== email.trim().toLowerCase() ||
      account.password !== password
    ) {
      return false;
    }

    setUser(account.user);
    localStorage.setItem(SESSION_KEY, "true");

    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  }

  function updateProfile(updatedUser: DemoUser) {
    if (!account) return;

    const updatedAccount = {
      ...account,
      user: updatedUser,
    };

    setAccount(updatedAccount);
    setUser(updatedUser);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        register,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}