import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import ActionCalls from "./components/ActionCalls";
import Testimonials from "./components/Testimonials";
import Bottom from "./components/Bottom";

import Nav from "./components/Nav";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(false);
    }, 1000)
  }, [])

  return (
    <main className="App">
      <Hero />
      <ActionCalls />
      <Offers />
      <Testimonials />
      <Bottom />

      {showOverlay && <div className="overlay"></div>}
      
      <Nav />
      <Footer />
    </main>
  )
}

export default App;