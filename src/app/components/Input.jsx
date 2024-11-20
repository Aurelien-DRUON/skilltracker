"use client";

export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={label} className="text-green-900">
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-green-300 rounded-lg p-2"
      />
    </div>
  );
}
