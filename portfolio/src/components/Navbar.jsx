function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("AboutMe")}
          className={currentPage === "AboutMe"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={currentPage === "Projects"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("resume")}
          className={currentPage === "Resume"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

// import React from 'react'

// export default function Navbar (){

//     return (
//         <div>
//             <a></a>
//             <a></a>
//             <a></a>
//         </div>
//     )
// }
