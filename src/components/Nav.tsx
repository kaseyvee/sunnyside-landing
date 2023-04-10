import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuItems from "./MenuItems";

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  useEffect(() => {
    setNavOpen(false);
  }, [])

  addEventListener("resize", () => {
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