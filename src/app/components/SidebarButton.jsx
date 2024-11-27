export default function SidebarButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 text-center text-white font-bold text-lg hover:bg-green-700 rounded-lg"
    >
      {children}
    </button>
  );
}
