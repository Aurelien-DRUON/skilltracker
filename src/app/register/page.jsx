"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../components/Button";
import ButtonHome from "../components/ButtonHome";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Register() {
  const router = useRouter();
  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);
  const handleClickRegister = useCallback(() => {
    // Code de soumission du formulaire
  }, []);

  return (
    <>
      <ButtonHome onClick={handleClickHome}>Home</ButtonHome>
      <Card title="Create Account">
        <div className=" flex flex-col gap-4">
          <form action="POST">
            <label htmlFor="text" className="text-green-500">
              Identifiant
            </label>
            <Input type="text" id="identifiant" name="identifiant" />
            <label htmlFor="email" className="text-green-500">
              Email
            </label>
            <Input type="email" id="email" name="email" />
            <label htmlFor="password" className="text-green-500">
              Mot de passe
            </label>
            <Input type="password" id="password" name="password" />
          </form>
          <Button onClick={handleClickRegister}>Register</Button>
        </div>
      </Card>
    </>
  );
}
