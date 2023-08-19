import React from "react";
import Home from "./Home";
function NavBar() {
  const links = [
    "home",
    "about", 
    "projects"
  ];

  return (
    <nav>
      {links.map((link,i)=>(
        <a key={i} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  )
}

export default NavBar;
