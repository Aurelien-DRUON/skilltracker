"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ButtonHome from "./components/ButtonHome";

export default function Home() {
  const router = useRouter();
  const handleClickLogIn = useCallback(() => {
    router.push("/login");
  }, []);
  const handleClickRegister = useCallback(() => {
    router.push("/register");
  }, []);
  const handleClickHome = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <>
      <ButtonHome onClick={handleClickHome}>Home</ButtonHome>
      <Card title="SkillTracker">
        <div className=" flex flex-col gap-4">
          <p className="text-black m-2">
            Bienvenue sur notre site de gestion de tâches. Pour continuer,
            veuillez vous connecter ou vous inscrire.
          </p>
          <Button onClick={handleClickLogIn}>Log in</Button>
          <Button onClick={handleClickRegister}>Register</Button>
        </div>
      </Card>
    </>
  );
}
