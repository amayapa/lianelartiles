import React, { useEffect, useState } from "react";
import { personalLinks, webs } from "../constants/links";
import Share from "../images/components/Share";
import GitHub from "../images/components/GitHub";
import LinkedIn from "../images/components/LinkedIn";
import IsMobile from "ismobilejs";
import { logos } from "../constants/logos";
import { Tooltip } from "@material-ui/core";

const SocialMedia = (props) => {
  const { languages, darkMode, setMessage } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator;
    setIsMobile(IsMobile(userAgent).any);
  }, []);

  const copiedSuccessfully = languages.esp
    ? "Copiado exitosamente al portapaleles"
    : languages.eng
    ? "Clipboard successfully set"
    : "Copie réussie dans le presse-papiers";
  const copyFailed = languages.esp
    ? "No pudo copiarse al portapaleles"
    : languages.eng
    ? "Clipboard write failed"
    : "Impossible de copier dans le presse-papiers";
  const wappMsg = languages.eng
    ? "_I want to share with you this website that I found interesting:_"
    : languages.esp
    ? "_Te comparto este sitio web que me pareció interesante:_"
    : "_Je vous partage ce site web que j'ai trouvé intéressant:_";

  const shareOptions = [
    {
      logo: logos.whatsApp,
      link: `${personalLinks.WHATSAPP}${wappMsg} ${webs.PORTFOLIO}`,
      tooltip: "WhatsApp",
      action: (link) => window.open(link),
    },
    // {
    //   logo: logos.messenger,
    //   link: `$`,
    //   tooltip: "Facebook Messenger",
    //   action: () => console.log("cooming soon messenger"),
    // },
    // {
    //   logo: logos.facebook,
    //   link: `$`,
    //   tooltip: "Facebook",
    //   action: () => console.log("cooming soon facebook"),
    // },
    {
      logo: logos.copy,
      tooltip: languages.eng
        ? "Copy to clipboard"
        : languages.esp
        ? "Copiar al portapapeles"
        : "Copier dans le press-papiers",
      action: () =>
        navigator.clipboard.writeText(webs.PORTFOLIO).then(
          () => setMessage({ success: true, copiedSuccessfully }),
          () => setMessage({ success: false, copyFailed })
        ),
    },
  ];

  return (
    <>
      <div id="shareLink">
        <Share
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
          isMobile={isMobile}
        />
        <span id="share" className="msg">
          {languages.eng
            ? "Share this website"
            : languages.esp
            ? "Compartir este sitio web"
            : "Partagez ce site"}
          <div id="share-options">
            {shareOptions.map(({ logo, link, tooltip, action }, index) => {
              return (
                <Tooltip title={tooltip} key={index}>
                  <img
                    src={logo}
                    className="share-option"
                    alt="Ups"
                    onClick={() => action(link)}
                  />
                </Tooltip>
              );
            })}
          </div>
        </span>
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
    </>
  );
};

export default SocialMedia;
