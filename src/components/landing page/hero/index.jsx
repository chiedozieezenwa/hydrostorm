import { useEffect, useState } from "react";
import { students1, students2, students3, students4, students5, students6 } from "../../../assets/landing page";
import design from "./hero.module.css";

export const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [students1, students2, students3, students4, students5, students6];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={design.container}>
      <section className={design.leftSection}>
        <p>
          Empower Your Academic Journey: Track, Analyze, and Excel Every
          Semester with EduStealth.
        </p>
        <button className={design.herobtn}>Get Started</button>
      </section>
      <section className={design.rightSection}>
        <img
          src={images[activeImage]}
          alt="hero img"
          className={`${design.grid} ${design.active}`}
        />
      </section>
    </div>
  );
};
