import PcNavbar from "./pc-navbar";
import MobileNavbar from "./responsive-navbar";

export default function Navbar() {
  return (
    <nav className="h-[5%] bg-white">
      <PcNavbar />
      <MobileNavbar />
    </nav>
  );
}
