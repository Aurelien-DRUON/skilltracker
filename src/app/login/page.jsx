"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ButtonHome from "../components/ButtonHome";
import Input from "../components/Input";

export default function Login() {
  const router = useRouter();
  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <>
      <ButtonHome onClick={handleClickHome}>Home</ButtonHome>
      <Card title="Log you">
        <div className=" flex flex-col gap-4">
          <form action="POST">
            <label htmlFor="text" className="text-green-500">
              Identifiant
            </label>
            <Input type="text" id="name" name="name" />
            <label htmlFor="password" className="text-green-500">
              Mot de passe
            </label>
            <Input type="password" id="password" name="password" />
            <Button type="submit">Log in</Button>
          </form>
        </div>
      </Card>
    </>
  );
}
