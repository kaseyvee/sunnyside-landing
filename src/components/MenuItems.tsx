import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const MenuItems: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <motion.div
      className="menu-items"
      animate={{
        scaleY: [0, 1],
        x: isMobile ? "-50%" : 0
      }}
    >
      <div className="menu-items_items">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
      </div>

      <button className="menu-items_button">CONTACT</button>
    </motion.div>
  )
}

export default MenuItems;