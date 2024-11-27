"use client";

import { useCallback } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import ButtonHome from "../components/ButtonHome";
import { useGetUser } from "../api/login";
import { useParams, useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const user = await useGetUser({ email, password });
      user ? router.push("/dashboard?user=" + user.id) : alert("Error");
    } catch {
      alert("Error");
    }
  }, []);

  return (
    <>
      <Card title="Log you">
        <div className=" flex flex-col gap-4">
          <form onSubmit={handleSubmit}>
            <Input label="Email" type="text" id="email" name="email" />
            <Input
              label="Mot de passe"
              type="password"
              id="password"
              name="password"
            />
            <Button type="submit">Log in</Button>
          </form>
        </div>
        <ButtonHome />
      </Card>
    </>
  );
}
