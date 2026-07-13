import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useDispatch } from "react-redux";
import axios from "axios";
import { clearUser, setUser } from "../redux/features/userSlice/userSlice";
import { socket } from "../socket/socket";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        socket.emit("join", currentUser?.email);

        console.log("JOIN:", currentUser.email);

        await axios.post(
          "http://localhost:3000/api/auth/jwt",
          {
            email: currentUser.email,
          },
          {
            withCredentials: true,
          },
        );
        const res = await axios.get(
          `http://localhost:3000/api/users/${currentUser.email}`,
          {
            withCredentials: true,
          },
        );
        setCurrentUser(true);

        dispatch(setUser(res?.data?.user));
      } else {
        console.log("User Logout");
        dispatch(clearUser());
        setCurrentUser(null);
        dispatch(setUser(null));
        await axios.post(
          "http://localhost:3000/api/auth/logout",
          {},
          {
            withCredentials: true,
          },
        );
        await logout();
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    currentUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
