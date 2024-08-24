import { facebook, insta, linkedin, x } from "../../../assets";
import design from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={design.container}>
      <section className={design.topSection}>
        <div className={design.logo}>
          <p>
            Edu<span>Stealth</span>
          </p>
        </div>
        <div className={design.rightSide}>
          <p>Track. Analyze. Excel</p>
          <button className={design.footerBtn}>Get Started</button>
        </div>
      </section>
      
      <div className={design.divider}></div>

      <section className={design.bottomSection}>
        <div className={design.smIcons}>
          <img src={facebook} alt="Facebook Icon" />
          <img src={x} alt="X Icon" />
          <img src={insta} alt="Instagram Icon" />
          <img src={linkedin} alt="Linkedin Icon" />
        </div>
        <div className={design.bottomRight}>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </div>
  );
};
