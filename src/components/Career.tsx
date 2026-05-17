import "./styles/Career.css";
import { useLang } from "../context/LangProvider";

const Career = () => {
  const { t } = useLang();
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {t("Mon parcours", "My Career")} <span>&</span>
          <br /> {t("expérience", "experience")}
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fondateur & CEO</h4>
                <h5>WapiWay / GoSell / Beyond Tech</h5>
              </div>
              <h3>2023 — Présent</h3>
            </div>
            <p>
              {t(
                "Création et gestion de plusieurs produits SaaS ciblant le marché francophone africain. Automatisation WhatsApp, intégration de paiements Mobile Money, et solutions e-commerce pour créateurs.",
                "Building and managing multiple SaaS products targeting the French-speaking African market. WhatsApp automation, Mobile Money payment integration, and e-commerce solutions for creators."
              )}
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Développeur Freelance</h4>
                <h5>Beyond Tech</h5>
              </div>
              <h3>2022 — Présent</h3>
            </div>
            <p>
              {t(
                "Missions sur mesure pour des clients en Afrique de l'Ouest. Digitalisation des opérations, intégration d'API complexes, et déploiements d'infrastructures cloud.",
                "Custom projects for clients across West Africa. Operations digitalization, complex API integrations, and cloud infrastructure deployments."
              )}
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Développeur IA & Agents</h4>
                <h5>Projets clients (Tolaro, Kamex)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              {t(
                "Création de systèmes multi-agents IA spécialisés (jusqu'à 20 agents) pour automatiser et piloter les opérations d'entreprises (export, investissement algorithmique, support client).",
                "Building specialized multi-agent AI systems (up to 20 agents) to automate and manage business operations (export, algorithmic trading, customer support)."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
