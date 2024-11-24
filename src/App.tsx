import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";

function App() {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  );
}

export default App;
