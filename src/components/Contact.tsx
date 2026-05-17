import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { useLang } from "../context/LangProvider";

const Contact = () => {
  const { t } = useLang();
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bienvenu082003@gmail.com" data-cursor="disable">
                bienvenu082003@gmail.com
              </a>
            </p>
            <h4>{t("Localisation", "Location")}</h4>
            <p>Parakou, Bénin</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              {t("Conçu & Développé par", "Built by")} <span>Bienvenu TONGUI</span>
            </h2>
            <h5><MdCopyright /> 2026</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
