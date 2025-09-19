import { useState } from "react";

export const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      setToken(data.access_token);
    } else {
      setToken("Invalid credentials");
    }
  };

  return (
    <div className="p-40">
        
    <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-20  bg-green-300 rounded shadow flex flex-col gap-4">
        <h1 className="text-center text-black font-bold text-2xl font-serif">Sign In</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="text-black text-center" />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="text-center"/>
      <button className=" pb-5 m-5 py-2 px-4 text-white bg-green-600 rounded-xl" type="submit">Signin</button>
      <p>{token}</p>
    </form>
    </div>
  );
};
export default SigninForm;