function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <button
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
        >
          About Me
        </button>
      </li>
      <li>
        <button
          href="#projects"
          onClick={() => handlePageChange("Projects")}
        >
          Projects
        </button>
      </li>
      <li>
        <button
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </button>
      </li>
      <li>
        <button
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
