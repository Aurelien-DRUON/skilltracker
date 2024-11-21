import Image from "next/image";
import HomeIcon from "../../../public/home-icon.svg";

export default function ButtonHome({ children, onClick }) {
  return (
    <button
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded-lg flex items-center gap-2 shadow-lg"
      onClick={onClick}
    >
      {/* {children} */}
      <Image src={HomeIcon} alt="Home" className="h-5 w-5" />
    </button>
  );
}
