"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  const router = useRouter();
  const handleClickLogIn = useCallback(() => {
    router.push("/login");
  }, []);
  const handleClickRegister = useCallback(() => {
    router.push("/register");
  }, []);

  return (
    <Card title="Card">
      <h1>Home</h1>
      <Button onClick={handleClickLogIn}>Log in</Button>
      <Button onClick={handleClickRegister}>Register</Button>
    </Card>
  );
}
