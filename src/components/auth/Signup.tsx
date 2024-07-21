"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signup = () => {
  const router = useRouter();

  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    console.log(userCred);
    const resp = await axios.post("/api/user", userCred);
    const data = await resp.data;
    console.log(data);
    // router.push("/");
  };

  return (
    <div className="w-1/4 grid gap-4 p-5 border border-slate-50 rounded-md shadow-md ">
      <h1 className="text-3xl font-normal text-center my-3">
        Create an account
      </h1>
      <input
        placeholder="email"
        className="p-2 border w-full rounded-md focus:outline-slate-500 text-slate-800 text-md"
        onChange={(e) => setUserCred({ ...userCred, email: e.target.value })}
      />
      <input
        placeholder="password"
        className="p-2 border w-full rounded-md focus:outline-slate-500 text-slate-800 text-md"
        onChange={(e) => setUserCred({ ...userCred, password: e.target.value })}
      />
      <button
        onClick={handleClick}
        className="w-full border p-2 rounded-md bg-slate-700 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default Signup;
