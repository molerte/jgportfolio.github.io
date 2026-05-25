import { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import "./molerteProjects.css";
import { FaExternalLinkAlt } from "react-icons/fa";
const images = import.meta.glob("../assets/images/*.{jpg,png}", { eager: true });

export default function MolerteProjects() {
    const [introVisible, setIntroVisible] = useState(true);
    const [introFading, setIntroFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setIntroFading(true), 1000);
        const hideTimer = setTimeout(() => setIntroVisible(false), 1500);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <>
            <main>
                <section>
                    <div className="fifthDiv">
                        <div className="side">projects.</div>

                        <div className="row">

                            <div className="project-column">
                                <a href="../Projects/Projects.html">
                                    <img src={images["../assets/images/mybeaufortview.jpg"].default} className="row-img" alt="View" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/ONGOING-bold.png"].default} className="row-img" alt="Ongoing" />
                                </div>
                                <figcaption>View
                                    <p>This application simplifies gym routines by eliminating unnecessary features like calorie counters and social feeds.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="../Projects/Projects.html">
                                    <img src={images["../assets/images/holu.jpg"].default} className="row-img" alt="Holu" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2026.png"].default} className="row-img" alt="2026" />
                                </div>
                                <figcaption>Holu
                                    <a href="https://holufitness.netlify.app/" target="Last-Man-Standing">
                                        <button><FaExternalLinkAlt /></button>
                                    </a>
                                    <p>Holu is a community-driven fitness platform where gym members share, discover, and build workout routines. Browse real routines from real people, save the ones that match your goals or likings, and publish your own to inspire others.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="https://github.com/molerte/jgportfolio.github.io">
                                    <img src={images["../assets/images/websiteex.jpg"].default} className="row-img" alt="Personal Website" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2026.png"].default} className="row-img" alt="2026" />
                                </div>
                                <figcaption>Personal Website
                                    <a href="https://molerte.github.io/jgportfolio.github.io/" target="Last-Man-Standing">
                                        <button><FaExternalLinkAlt /></button>
                                    </a>
                                    <p>Designed and developed a personal website to showcase projects, skills, and experiences.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="https://github.com/molerte/Calenvisor">
                                    <img src={images["../assets/images/calenvisor-p.jpg"].default} className="row-img" alt="Calenvisor" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2025.png"].default} className="row-img" alt="2025" />
                                </div>
                                <figcaption>Calenvisor
                                    <p>This program allows users to configure information about students, advisors, meetings, and availability. Users can add, delete, and edit information in the database.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="https://github.com/molerte/B320_Project_DBMS">
                                    <img src={images["../assets/images/DatabaseProject.jpg"].default} className="row-img" alt="Managing USCB Student Database" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2024.png"].default} className="row-img" alt="2024" />
                                </div>
                                <figcaption>Managing USCB Student Database
                                    <p>The purpose is to find results using queries from our database. To do this, we must first build our tables using an Entity-Relationship Diagram (ERD) before implementing the information in our database.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="https://github.com/molerte/Last-Man-Standing">
                                    <img src={images["../assets/images/lastmanStanding.jpg"].default} className="row-img" alt="Last Man Standing" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2023.png"].default} className="row-img" alt="2023" />
                                </div>
                                <figcaption>Last Man Standing
                                    <a href="https://www.greenfoot.org/scenarios/32516" target="Last-Man-Standing">
                                        <button><FaExternalLinkAlt /></button>
                                    </a>
                                    <p>Designed and developed "Last Man Standing," a top-down 2D game inspired by Futurism, using Greenfoot and Java.</p>
                                </figcaption>
                            </div>

                            <div className="project-column">
                                <a href="../Projects/Projects.html">
                                    <img src={images["../assets/images/YRBS.jpg"].default} className="row-img" alt="2019 YRBS Data Analysis" />
                                </a>
                                <div className="year">
                                    <img src={images["../assets/images/2022.png"].default} className="row-img" alt="2022" />
                                </div>
                                <figcaption>2019 YRBS Data Analysis
                                    <p>Analyzing the connection between prescription drug abuse and illicit drug use. Applied data analysis and visualization techniques to interpret trends and draw meaningful conclusions.</p>
                                </figcaption>
                            </div>

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