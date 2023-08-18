
function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <button
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe"}
        >
          About Me
        </button>
      </li>
      <li>
        <button
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={currentPage === "Projects"}
        >
          Projects
        </button>
      </li>
      <li>
        <button
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume"}
        >
          Resume
        </button>
      </li>
      <li>
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
