import { useState } from "react";
import "./App.css";

/*Pages*/
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
/*Components*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
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
