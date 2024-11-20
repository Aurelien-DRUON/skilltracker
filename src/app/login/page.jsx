"use client";

import Button from "../components/Button";
import Card from "../components/Card";
import Text from "../components/Text";

export default function Login() {
  return (
    <>
      <Card title="Card">
        <div className=" flex flex-col">
          <Text variant="p">Bonjour</Text>
          <Button>Log in</Button>
        </div>
      </Card>
    </>
  );
}
