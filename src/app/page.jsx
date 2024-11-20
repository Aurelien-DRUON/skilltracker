"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "./components/Button";

export default function Home() {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push("/login");
  }, []);

  return <Button onClick={handleClick}>Log in</Button>;
}
