import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./landingPage/Components/Navbar";
import Footer from "./landingPage/Components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      {isAdmin ? (
        <AppRoutes />
      ) : (
        <>
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
