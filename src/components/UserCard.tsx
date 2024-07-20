"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

interface Address {
  city: "string";
  houseNumber: number;
  state: string;
}

interface User {
  name: string;
  email: string;
}

const UserCard = () => {
  const [user, setUser] = useState<User | null>(null);

  const getUserWithCb = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      );
      const data = await response.data;
      if (data) {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserWithCb();
  }, [getUserWithCb]);

  return (
    <>
      {user ? (
        <div className="w-fit grid gap-4 p-5 border border-slate-50 rounded-xl text-xl shadow-md">
          <p>name : {user?.name}</p>
          <p>email : {user?.email}</p>
        </div>
      ) : (
        <>
          <div className="w-1/4 flex flex-col justify-start items-center gap-4 p-5 border border-slate-50 rounded-xl shadow-md">
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};

export default UserCard;
