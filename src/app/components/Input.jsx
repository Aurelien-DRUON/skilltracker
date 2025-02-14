export default function Input({
  type,
  placeholder,
  value,
  onChange,
  label,
  id,
  name,
  className,
}) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-green-500">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-green-100 border border-green-300 text-gray-700 py-2 px-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full mb-4 ${className}`}
      />
    </>
  );
}
