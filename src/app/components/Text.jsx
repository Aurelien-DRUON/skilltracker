"use client";

export default function Text({ variant, children }) {
  return variant === "title" ? (
    <h1 className="text-2xl font-bold text-green-700 mb-4">{children}</h1>
  ) : variant === "p" ? (
    <span className="text-green-900">{children}</span>
  ) : null;
}
