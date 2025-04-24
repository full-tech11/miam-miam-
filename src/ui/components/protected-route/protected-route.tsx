import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-up"); // Redirige vers la page d'inscription si non connecté
    }
  }, [user, router]);

  if (!user) return null; // Empêche l'affichage du contenu avant la redirection

  return <>{children}</>;
};

export default ProtectedRoute;