"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../components/Button";
import ButtonHome from "../components/ButtonHome";
import Card from "../components/Card";

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
        <div className=" flex flex-col">
          <Button onClick={handleClickRegister}>Register</Button>
        </div>
      </Card>
    </>
  );
}
