import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleIsMobile();
  }, [])

  function handleIsMobile() {
    if (window.innerWidth >= 480) {
      return setIsMobile(false);
    }
    return setIsMobile(true);
  }

  addEventListener("resize", handleIsMobile);

  return (
    <div className="hero">
      <picture className="hero_bg">
        <source
          media="(min-width: 1000px)"
          srcSet="desktop/image-header.jpg"
        />
        <img
          src="mobile/image-header.jpg"
          alt="orange cross section on sky blue background"
        />
      </picture>

      <div className="hero_main">
        <h1 className="hero_main_header">WE ARE CREATIVES</h1>
        
        <div className="hero_main_header_arrow">
          <img
            src="general/icon-arrow-down.svg"
            alt="arrow pointing down"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;