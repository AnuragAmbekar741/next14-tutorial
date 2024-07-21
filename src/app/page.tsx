import axios from "axios";
import client from "@/db";

//Traditional way of hitting server and server accessing db with http get req.
async function getUserDetails() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get("http://localhost:3000/api/user");
  const data = await response.data;
  return data;
}

//utilising prisma client in server component - nextjs - avoid round trip to client - server - db to client to db.
async function getUserDetailsFromDb() {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
  };
}

export default async function Home() {
  const userData = await getUserDetailsFromDb();

  return (
    <div className="full flex p-10">
      <div className="w-fit grid gap-4 p-5 border border-slate-50 rounded-xl text-xl shadow-md">
        <p>name : Anurag</p>
        <p>email : {userData?.email}</p>
      </div>
    </div>
  );
}
