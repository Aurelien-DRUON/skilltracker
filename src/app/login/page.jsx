"use client";

import { useCallback } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import ButtonHome from "../components/ButtonHome";

export default function Login() {
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, email, password);
  }, []);

  return (
    <>
      <Card title="Log you">
        <div className=" flex flex-col gap-4">
          <form onSubmit={handleSubmit}>
            <Input label="Identifiant" type="text" id="name" name="name" />
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
