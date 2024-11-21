"use client";

import Text from "./Text";

export default function Card({ title, children }) {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-green-100 border border-green-300 rounded-lg shadow-lg p-6 max-w-md min-w-[300px]">
        <Text variant="title">{title}</Text>
        {children}
      </div>
    </div>
  );
}
