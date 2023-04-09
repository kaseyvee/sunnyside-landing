import { useEffect, useState } from "react";
import MenuItems from "./MenuItems";

const Nav: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    handleIsDesktop();
    setNavOpen(false);
  }, [])

  function handleIsDesktop() {
    if (window.innerWidth <= 768) {
      return setIsDesktop(false);
    }
    return setIsDesktop(true);
  }

  addEventListener("resize", () => {
    handleIsDesktop();
    setNavOpen(false);
  });

  function handleOpenNav() {
    if (navOpen) {
      return setNavOpen(false);
    }
    return setNavOpen(true);
  }

  return (
    <nav className="nav">
      <div className="nav_main">
        <div className="nav_main_logo">
          <img
            src="general/logo-nav.svg"
            alt="sunnyside logo"
          />
        </div>

        {isDesktop ?
          <MenuItems />
          :
          <div className="nav_main_mobile-menu" onClick={handleOpenNav}>
            <img
              src="general/icon-hamburger.svg"
              alt="sunnyside logo"
              style={navOpen ? { opacity: 0.3 } : undefined}
            />
          </div>
        }
      </div>

      {navOpen && <MenuItems />}
    </nav>
  )
}

export default Nav;