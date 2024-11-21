export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-green-100 border border-green-300 text-gray-700 py-2 px-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full mb-4"
    />
  );
}
