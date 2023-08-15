
function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <button
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home"}
        >
          Home
        </button>
      </li>
      <li className="nav-item">
        <button
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe"}
        >
          About
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
          onClick={() => handlePageChange("resume")}
          className={currentPage === "Resume"}
        >
          Resume
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
