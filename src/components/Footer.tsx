const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_logo-container">
        <img
          src="general/logo-footer.svg"
          alt="sunnyside logo"
        />
      </div>

      <div className="footer_menu">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
      </div>

      <div className="footer_socials">
        <img
          src="general/icon-facebook.svg"
          alt="sunnyside agency logo"
        />
        <img
          src="general/icon-instagram.svg"
          alt="sunnyside agency logo"
        />
        <img
          src="general/icon-twitter.svg"
          alt="sunnyside agency logo"
        />
        <img
          src="general/icon-pinterest.svg"
          alt="sunnyside agency logo"
        />
      </div>
    </footer>
  )
}

export default Footer;