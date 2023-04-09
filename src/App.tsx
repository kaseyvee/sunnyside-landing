import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Bottom from "./components/Bottom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Offers from "./components/Offers";
import ActionCalls from "./components/ActionCalls";

const App: React.FC = () => {

  return (
    <main className="App">
      <Hero />
      <ActionCalls />
      <Offers />
      <Testimonials />
      <Bottom />
      
      <Nav />
      <Footer />
    </main>
  )
}

export default App;