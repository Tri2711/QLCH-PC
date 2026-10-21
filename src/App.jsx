import Header from "./components/Header";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}

export default App;