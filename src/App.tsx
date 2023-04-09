import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Bottom from "./components/Bottom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {

  return (
    <main className="App">
      <Hero />
      <Testimonials />
      <Bottom />
      
      <Nav />
      <Footer />
    </main>
  )
}

export default App;