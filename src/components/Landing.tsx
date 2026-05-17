import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! Je suis</h2>
            <h1>
              BIENVENU
              <br />
              <span>TONGUI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Un Tech</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Founder</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Founder</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
