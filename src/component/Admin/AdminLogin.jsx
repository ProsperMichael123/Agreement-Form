import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../specialFunction/Header";

// 🔥 Firebase imports
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 🔥 Firebase login
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful ✅");
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Invalid credentials ❌");
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Header/>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-blue-50 shadow-xl rounded-2xl p-10"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Admin Login
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-4 mb-5 w-full rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-4 mb-8 w-full rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-4 w-full rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;