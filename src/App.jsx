import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="nav-home">
          <Hero />
        </div>
        <div id="nav-categories">
          <CategorySection />
        </div>
        <div id="nav-products">
          <ProductSection />
        </div>
      </main>
      <div id="nav-contact">
        <Footer />
      </div>
    </>
  );
}

export default App;