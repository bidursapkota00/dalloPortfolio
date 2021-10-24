import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  const { ref, inView } = useInView({
    rootMargin: "0% 0% -95% 0%",
  });
  const [changeNav, setNav] = useState("");
  const [change3Lines, set3Lines] = useState("");
  useEffect(() => {
    if (window.pageYOffset > 768) {
      setNav("fixed");
    }
    if (window.pageYOffset > 275) {
      set3Lines("black");
    }
    if (inView) {
      setNav("fixed");
      set3Lines("black");
    } else {
      if (window.pageYOffset < 768) {
        setNav("");
      }
      if (window.pageYOffset < 275) {
        set3Lines("");
      }
    }
  }, [inView]);
  const [showNav, setShowNav] = useState("");
  const toggleNav = () => {
    const ref = document.querySelector(".nav");
    if (ref.classList.contains("show-navbar")) {
      setShowNav("");
      document.getElementById("toggle-navbar").style.display = "block";
    }
  };
  let person = null;
  person = useSelector((state) => state.fetch.person);
  return (
    <div id="top">
      <div className={`hamburger  ${change3Lines ? "hamburger-white" : ""}`}>
        <div id={`toggle-navbar`}>
          <div className="flex-lines">
            <div
              className="lines"
              onClick={() => {
                setShowNav("show-navbar");
                document.getElementById("toggle-navbar").style.display = "none";
              }}
            >
              <div className={change3Lines + " line"}></div>
              <div className={change3Lines + " line"}></div>
              <div className={change3Lines + " line"}></div>
            </div>
            <div
              className={`mobile-logo ${
                change3Lines ? "mobile-logo-black" : ""
              }`}
            >
              <Link
                to="top"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className={`nav ${changeNav} ${showNav}`}>
        <div className="nav-container">
          <div className="logo">
            <Link
              to="top"
              offset={50}
              duration={500}
              onClick={() => toggleNav()}
            >
              Portfolio
            </Link>
          </div>
          <ul>
            <li>
              <Link
                to="top"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="education"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                offset={50}
                duration={500}
                onClick={() => toggleNav()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="main-container"
        onClick={() => {
          const ref = document.querySelector(".nav");
          if (ref.classList.contains("show-navbar")) {
            setShowNav("");
            document.getElementById("toggle-navbar").style.display = "block";
          }
        }}
      >
        <Home person={person} />
        <div ref={ref} className="test1">
          <About />
        </div>
        <Skills person={person} />
        <Education person={person} />
        <Experience person={person} />
        <Contact person={person} />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
