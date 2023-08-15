import { useState } from "react";
import "./App.css";

/*Pages*/
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
/*Components*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
