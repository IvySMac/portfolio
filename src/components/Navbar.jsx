
function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <button
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe"}
        >
          About Me
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={currentPage === "Projects"}
        >
          Projects
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume"}
        >
          Resume
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact"}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
