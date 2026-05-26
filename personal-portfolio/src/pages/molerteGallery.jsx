import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./molerteGallery.css";

const images = import.meta.glob("../assets/images/*.{jpg,JPG}", { eager: true });

export default function MolerteGallery() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [introVisible, setIntroVisible] = useState(true);
    const [introFading, setIntroFading] = useState(false);
    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setIntroFading(true), 1000);
        const hideTimer = setTimeout(() => setIntroVisible(false), 1500);
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

                        <div className="side">gallery.</div>

                        <div className="projectRow">

                            <figure className="caption-right">
                                <img src={images["../assets/images/44eg.jpg"].default} className="yrbs-img" alt="Fallen" />
                                <figcaption>Fallen</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/untitledwave.jpg"].default} className="website-img" alt="Untitled Wave" />
                                <figcaption>Untitled Wave</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/lyeyebetter.jpg"].default} className="website-img" alt="Composite" />
                                <figcaption>Composite</figcaption>
                            </figure>

                            <div className="upsidedown">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/topoutPORCHE911.jpg"].default} className="yrbs-img" alt="GT2 RS" />
                                <figcaption>GT2 RS</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/15amtilt.jpg"].default} className="website-img" alt="Serene. Life After Death" />
                                <figcaption>Serene. Life After Death</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/15amOF1.jpg"].default} className="website-img" alt="19:45" />
                                <figcaption>19:45</figcaption>
                            </figure>

                            <div className="side">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/EndlessNos.jpg"].default} className="yrbs-img" alt="Endless Nostalgia" />
                                <figcaption>Endless Nostalgia</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/Collapse.JPG"].default} className="website-img" alt="Echoes" />
                                <figcaption>Echoes</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/coolprofilepic.jpg"].default} className="website-img" alt="Out of Comfort" />
                                <figcaption>Out of Comfort</figcaption>
                            </figure>

                            <div className="upsidedown">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/COMMUNITY-GARDEN.jpg"].default} className="website-img" alt="Community Garden" />
                                <figcaption>Community Garden</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/goodgoodGOOD.jpg"].default} className="website-img" alt="Good" />
                                <figcaption>Good</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/beauties.jpg"].default} className="website-img" alt="Beauties Can Die" />
                                <figcaption>Beauties Can Die</figcaption>
                            </figure>

                            <div className="side">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/roadtrip.jpg"].default} className="website-img" alt="iDeath 95" />
                                <figcaption>iDeath 95</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/deluxeloweryoureyelids.jpg"].default} className="website-img" alt="Lower Your Eyelids" />
                                <figcaption>Lower Your Eyelids</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/dreamsMolerte.jpg"].default} className="website-img" alt="Another World" />
                                <figcaption>Another World</figcaption>
                            </figure>

                            <div className="upsidedown">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/illusions.jpg"].default} className="website-img" alt="Illusions" />
                                <figcaption>Illusions</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/albumcover22.jpg"].default} className="website-img" alt="We All Collapse" />
                                <figcaption>We All Collapse</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/catsAlbum.jpg"].default} className="website-img" alt="Lost Cats" />
                                <figcaption>Lost Cats</figcaption>
                            </figure>

                            <div className="side">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/molerte-woods.jpg"].default} className="website-img" alt="Woods" />
                                <figcaption>Woods</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/molerteTheHighlight.jpg"].default} className="website-img" alt="The Highlights" />
                                <figcaption>The Highlights</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/wonderlanddeluxe.jpg"].default} className="website-img" alt="Wonderland" />
                                <figcaption>Wonderland</figcaption>
                            </figure>

                            <div className="upsidedown">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/curtainsalbumcoverCURAINTS.jpg"].default} className="website-img" alt="Curtains" />
                                <figcaption>Curtains</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/idkl4.jpg"].default} className="website-img" alt="Curve" />
                                <figcaption>Curve</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/tuxGUYALBUMTONEDARKPA.jpg"].default} className="website-img" alt="Vocal" />
                                <figcaption>Vocal</figcaption>
                            </figure>

                            <div className="side">gallery.</div>

                            <figure className="caption-right">
                                <img src={images["../assets/images/HolmgrenPower.jpg"].default} className="website-img" alt="VisualPower Two" />
                                <figcaption>VisualPower Two</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/porsche911drive2.jpg"].default} className="website-img" alt="Off The Lot" />
                                <figcaption>Off The Lot</figcaption>
                            </figure>

                            <figure className="caption-right">
                                <img src={images["../assets/images/FinalFlight.jpg"].default} className="website-img" alt="Final Flight" />
                                <figcaption>Final Flight</figcaption>
                            </figure>

                            <div className="side-end">molerte.</div>

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