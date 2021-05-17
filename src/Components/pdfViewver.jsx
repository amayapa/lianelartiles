import React, { useEffect, useState } from 'react';
import engPdf from '../data/Lianel-Artiles-Dev-CV-Eng.pdf';
import espPdf from '../data/Lianel-Artiles-Dev-CV-Esp.pdf';
import frePdf from '../data/Lianel-Artiles-Dev-CV-Fre.pdf';

const Pdf = (props) => {
  const { esp, eng, fre } = props.languages;
  const [isMobile, setIsMobile] = useState(false);

  const engButtton = (<span>DOWNLOAD<br />RESUME IN PDF</span>);
  const espButtton = (<span>DESCARGAR<br />CV EN PDF.</span>);
  const freButtton = (<span>TÉLÉCHARGEZ<br /> CV AU PDF.</span>);

  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      setIsMobile(true)
    }
  }, [])

  if (isMobile) {
    return (
      <div>
        <button id='downloadBtn'>
          <a
            href={esp ? espPdf : fre ? frePdf : engPdf}
            id="PdfDownload"
            download={`Lianel-Artiles-${esp ? 'CV-esp' : fre ? 'CV-fre' : 'Resume-eng'}.pdf`}
            style={{ textDecoration: 'none', color: '#292a2e' }}
          >
            {eng ? engButtton : esp ? espButtton : freButtton}
          </a>
        </button>
      </div>
    )
  }

  return (
    <div id='jscv'>
      <h1>{esp ? 'CV Tradicional' : fre ? 'CV Traditionnel' : 'Traditional Resume'}</h1>
      <p>{esp ? 'Este es mi currículum en formato PDF.' : fre ? 'Ceci est mon CV au format PDF.' : 'This is my resume in PDF format.'}
      </p>
      <div className='pdf'>
        <object
          data={esp ? espPdf : fre ? frePdf : engPdf}
          type="application/pdf"
          className='obj'
        >
        </object>
      </div>
    </div>
  );
}

export default Pdf;