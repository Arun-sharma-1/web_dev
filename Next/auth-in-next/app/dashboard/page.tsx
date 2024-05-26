// 'use client'
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import React from "react";
import { NEXT_AUTH } from "../api/lib/auth";

async function Dashboard() {
  // const session = useSession();
  const session = await getServerSession(NEXT_AUTH);
  console.log("session is ", session);
  return <div>this is dashboard page {JSON.stringify(session)}</div>;
}

export default Dashboard;
