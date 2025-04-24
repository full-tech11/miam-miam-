import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/router";
import { updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase-config";

const Profile = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  const handleSave = async () => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        });
        alert("Profil mis à jour !");
        setIsEditing(false);
      } catch (error) {
        console.error("Erreur mise à jour:", error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-primary shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-5">👤 My Profile</h1>
      {user ? (
        <>
          <div className="flex flex-col items-center">
            <img
              src={photoURL || "/default-avatar.png"}
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            {isEditing ? (
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="border p-2 rounded w-full mb-3"
              />
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            {isEditing ? (
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="border p-2 rounded w-full"
              />
            ) : (
              <p className="p-2 border rounded">{displayName || "Non défini"}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <p className="p-2 border rounded bg-gray-100">{user.email}</p>
          </div>

          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gray-500 text-white px-4 py-2 rounded w-full"
            >
              Modify
            </button>
          )}

          <button
            onClick={logout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
          >
            Disconnect
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;