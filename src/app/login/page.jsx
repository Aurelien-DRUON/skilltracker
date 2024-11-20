"use client";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Login() {
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Card title="Card">
        <div className=" flex flex-col">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <Button>Log in</Button>
        </div>
      </Card>
    </>
  );
}
