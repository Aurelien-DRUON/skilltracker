"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import ButtonHome from "../components/ButtonHome";

export default function Login() {
  const router = useRouter();
  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);
  const handleClickLogin = useCallback(() => {
    // Code de soumission du formulaire
  }, []);

  return (
    <>
      <ButtonHome onClick={handleClickHome}>Home</ButtonHome>
      <Card title="Log you">
        <div className=" flex flex-col">
          <Button onClick={handleClickLogin}>Log in</Button>
        </div>
      </Card>
    </>
  );
}
