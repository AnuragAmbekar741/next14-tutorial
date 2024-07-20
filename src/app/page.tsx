import axios from "axios";
import { headers } from "next/headers";

async function getUserDetails() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get("http://localhost:3000/api/user");
  const data = await response.data;
  return data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="full flex p-10">
      <div className="w-fit grid gap-4 p-5 border border-slate-50 rounded-xl text-xl shadow-md">
        <p>name : {userData?.name}</p>
        <p>email : {userData?.email}</p>
      </div>
    </div>
  );
}
