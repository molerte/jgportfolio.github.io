import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
    { label: "Gallery", to: "/" },
    { label: "Projects", to: "/molerteProjects" },
    { label: "About", to: "/molerteAbout" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        function handleOutsideClick(e) {
            if (
                menuOpen &&
                navMenuRef.current &&
                !navMenuRef.current.contains(e.target) &&
                navToggleRef.current &&
                !navToggleRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [menuOpen]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <div id="mobile-nav-bar">
                <button
                    id="mobile-nav-toggle"
                    ref={navToggleRef}
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    className={menuOpen ? "open" : ""}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            <nav id="nav_menu">
                <ul className={menuOpen ? "open" : ""} ref={navMenuRef}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={location.pathname === link.to ? link.label.toLowerCase() : ""}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to="/"><i className="fa fa-long-arrow-left"></i> Return</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}