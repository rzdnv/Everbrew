import { useIsMobile } from "@/hooks/use-mobile";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header
      className="fixed top-0 z-50 w-full
        bg-white/10 backdrop-blur-md
        border-b border-white/20"
    >
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
