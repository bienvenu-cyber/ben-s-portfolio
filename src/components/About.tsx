import "./styles/About.css";
import { useLang } from "../context/LangProvider";

const About = () => {
  const { t } = useLang();
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{t("À propos de moi", "About Me")}</h3>
        <p className="para">
          {t(
            "Fondateur tech, expert en Intelligence Artificielle et automatisation d'entreprise, basé à Parakou au Bénin. Je conçois des produits SaaS, des systèmes d'agents IA et des workflows d'automatisation sur mesure pour les entreprises africaines et internationales — avec un focus sur le marché UEMOA, le Mobile Money et WhatsApp.",
            "Tech founder, AI expert and business automation specialist based in Parakou, Benin. I build SaaS products, AI agent systems and custom automation workflows for African and international businesses — focused on the UEMOA market, Mobile Money and WhatsApp."
          )}
        </p>
      </div>
    </div>
  );
};

export default About;
