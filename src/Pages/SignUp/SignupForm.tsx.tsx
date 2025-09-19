import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (res.ok) {
      setMessage("Signup successful!");
      navigate("/Signin")
    } else {
      const data = await res.json();
      setMessage(data.detail);
    }
  };

  return (
    <div className="pt-60 flex ">
     

    <form onSubmit={handleSubmit} className="max-w-md mx-auto  p-10 bg-gradient-to-b from-blue-500 to-pink-500 h-50-xl rounded shadow flex flex-col gap-4">
      <div className="flex justify-between items-center ">
      <img className="w-15 h-15  mb-4 rounded-full " src="./public/images/logo.png" alt="logo"  />
      <h2 className="font-serif font-bold text-xs pl-10">BOOK AN APOINTMENT</h2>
      </div>
      
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="text-black font-bold"/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="text-black font-bold"/>
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="text-black font-bold" />
      <button type="submit" className=" py-2 px-2 text-white bg-blue-600 rounded-xl">Signup</button>
      <p>{message}</p>
    </form>
  
    </div>
  );
};
export default SignupForm;