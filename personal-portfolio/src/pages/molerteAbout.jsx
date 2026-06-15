import { useState, useEffect, useRef } from "react";
import image1 from "../assets/images/image1.png";
import image4 from "../assets/images/image4.png";
import image3 from "../assets/images/image3.png";
import logo from "../assets/images/Jason_Garcia_logo.png";
import background from "../assets/images/background.jpg";
import "./molerteAbout.css";

export default function MolerteAbout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [introVisible, setIntroVisible] = useState(true);
    const [introFading, setIntroFading] = useState(false);
    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setIntroFading(true), 700);
        const hideTimer = setTimeout(() => setIntroVisible(false), 1200);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

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

    return (
        <>
            <main>
                <section>
                    <div className="fifthDiv">
                        <div className="side">about.</div>

                        <div className="about-row">
                            <div className="about-text">
                                <p>My journey into the niche of editing, photography, and production
                                    began when I was 14. I was initially drawn to experimental
                                    art—abstract pieces that yet conveyed a powerful narrative.
                                    This fascination inspired me to start editing images and videos
                                    as a way to express my own thoughts and artistic vision.
                                    My work often draws inspiration from everyday objects and scenes
                                    that I visualize.
                                </p>
                                <br />
                                <p>Over time, I have honed my skills in various editing software,
                                    allowing me to create more complex and visually striking pieces.
                                    My portfolio includes a range of projects, from surreal photo
                                    manipulations to dynamic video edits. Each piece is a reflection
                                    of my unique perspective and creative process.
                                </p>
                                <br />
                                <p>Through my work, I aim to evoke emotions and provoke thought,
                                    inviting viewers to see the world through my eyes. I am constantly
                                    exploring new techniques and styles, pushing the boundaries of my creativity. My journey is ongoing, and I am excited to see where my passion for editing and production will take me next.
                                </p>

                                <div className="about-image-row">
                                    <div className="img-column">
                                        <img src={image4} className="row-img" alt="flag" />
                                    </div>
                                    <div className="img-column">
                                        <img src={image1} className="row-img" alt="image1" />
                                    </div>
                                    <div className="img-column">
                                        <img src={image3} className="row-img" alt="image3" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="exit-footer">
                            <img src={logo} className="row-img" alt="Jason Garcia Logo" />
                        </div>
                    </div>

                    {introVisible && (
                        <div
                            id="intro"
                            className={`intro ${introFading ? "fade-out" : ""}`}
                            aria-hidden="true"
                        >
                            <div className="intro-text">molerte.</div>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}