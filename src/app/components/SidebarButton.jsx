export default function SidebarButton({ children }) {
  return (
    <button className="w-full py-2 text-center text-white hover:bg-green-700">
      {children}
    </button>
  );
}
