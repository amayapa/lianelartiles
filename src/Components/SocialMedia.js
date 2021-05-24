import React from "react";
import { personalLinks } from "../constants/links";
import Share from "../images/components/Share";
import GitHub from "../images/components/GitHub";
import LinkedIn from "../images/components/LinkedIn";
import Overlay from "../Components/Overlay";
import ShareOptions from "./ShareOptions";

const SocialMedia = (props) => {
  const { languages, darkMode, setMessage, isMobile, open, setOpen } = props;

  return (
    <section>
      <div id="shareLink">
        <Share
          className="smIcon"
          darkMode={darkMode}
          isMobile={isMobile}
          open={open}
          setOpen={setOpen}
          size={{
            width: "30",
            height: "30",
          }}
          colors={{
            dark: "#ffffff",
            light: "#201e1e",
          }}
        />
        <ShareOptions
          languages={languages}
          isMobile={isMobile}
          open={open}
          setOpen={setOpen}
          setMessage={setMessage}
          darkMode={darkMode}
        />
      </div>
      <a
        id="gitLink"
        target="_blank"
        rel="noopener noreferrer"
        href={personalLinks.GITHUB}
      >
        <GitHub
          className="smIcon"
          darkMode={darkMode}
          size={{
            width: "30",
            height: "30",
          }}
          colors={{
            dark: "#ffffff",
            light: "#201e1e",
          }}
        />
        <span id="gitMsg" className="msg">
          {languages.eng
            ? "Check my repositories"
            : languages.esp
            ? "Revisa mis repositorios"
            : "Vérifier mes référentiels"}
        </span>
      </a>
      <a
        id="inLink"
        target="_blank"
        rel="noopener noreferrer"
        href={`${personalLinks.LINKEDIN}/?locale=${
          languages.eng ? "en_EN" : languages.fre ? "fr_FR" : "es_ES"
        }`}
      >
        <LinkedIn
          className="smIcon"
          darkMode={darkMode}
          size={{
            width: "30",
            height: "30",
          }}
          colors={{
            dark: "#ffffff",
            light: "#201e1e",
          }}
        />
        <span id="inMsg" className="msg">
          {languages.eng
            ? "Let's connect"
            : languages.esp
            ? "Conectemos"
            : "Connectons-nous"}
        </span>
      </a>
      <Overlay open={open} stateChangers={[setOpen]} />
    </section>
  );
};

export default SocialMedia;
