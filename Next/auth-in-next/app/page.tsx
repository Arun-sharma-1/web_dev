"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
interface responseType {
  data: {
    message: string;
    status: Number;
  };
}
const Home = () => {
  const { push } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data }: responseType = await axios.post(
        "/api/auth/login",
        payload
      );
      
      if (data.message != "Unauthorized") push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Nextjs authentication jwt verify http cookie only</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="border rounded border-black"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border rounded border-black"
          />
        </div>

        <button
          type="submit"
          className="p-2 bg-orange-600 text-white w-fit rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
