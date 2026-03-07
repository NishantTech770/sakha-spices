import AppRoutes from "./routes/AppRoutes"
import Navbar from "./landingPage/Components/Navbar";
import Footer from "./landingPage/Components/Footer"
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
     <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
