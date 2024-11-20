"use client";

import Text from "./Text";

export default function Card({ title, children }) {
  return (
    <div className="bg-green-100 border border-green-300 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <Text variant="title">{title}</Text>
      {children}
    </div>
  );
}
