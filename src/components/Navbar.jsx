import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("home");
  const location = useLocation();

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Handle scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Active link tracking
  useEffect(() => {
    const current = location.pathname.replace("/", "") || "home";
    setActive(current);
  }, [location]);

  // Smooth scroll if on home page
  const handleLinkClick = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/" && id !== "home") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="brand">
            Mohit<span className="highlight">.dev</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className={active === link.id ? "active" : ""}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className={active === link.id ? "active" : ""}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
