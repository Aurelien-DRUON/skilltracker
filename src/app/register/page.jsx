"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../components/Button";
import ButtonHome from "../components/ButtonHome";
import Card from "../components/Card";
import Input from "../components/Input";
import usePostUser from "../api/login";

export default function Register() {
  const router = useRouter();
  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await usePostUser({ name, email, password });
      router.push("/login");
    } catch {
      alert("Error");
    }
  }, []);

  return (
    <>
      <ButtonHome onClick={handleClickHome}>Home</ButtonHome>
      <Card title="Create Account">
        <div className=" flex flex-col gap-4">
          <form name="" onSubmit={handleSubmit}>
            <Input label="Identifiant" type="text" id="name" name="name" />
            <Input label="Email" type="email" id="email" name="email" />
            <Input
              label="Mot de Passe"
              type="password"
              id="password"
              name="password"
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </Card>
    </>
  );
}
