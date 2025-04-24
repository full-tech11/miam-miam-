
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "@/config/firebase-config"; // Assure-toi que le chemin est correct

// Création du contexte d'authentification
interface AuthContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Provider qui enveloppe l'application
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Vérifier l'état de l'utilisateur (connecté ou non)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Inscription
  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/"); // Redirection après inscription
  };

  // Connexion
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/"); // Redirection après connexion
  };

  // Déconnexion
  const logout = async () => {
    await signOut(auth);
    router.push("/"); // Redirection après déconnexion
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  return context;
};