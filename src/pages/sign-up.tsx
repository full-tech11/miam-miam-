import { useState } from "react";
import { useRouter } from "next/router"; // ✅ Importer useRouter
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config"; // Assure-toi que le chemin est correct

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ Initialiser le router

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Utilisateur créé :", userCredential.user);

      // ✅ Rediriger vers la page d'accueil après inscription réussie
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup} className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;