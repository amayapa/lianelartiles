/* ======================= IMPORTATIONS ======================= */
import React, { useEffect } from 'react'
import '../Styles/landingPage.css'

const LandingPage = (props) => {
  /* ======================= STATE ======================= */
  const language = props.language;

  /* ======================= FUNCTIONS ======================= */
  const ua = navigator.userAgent;
  const getDeviceType = () => {
    var hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
      console.log('Has orientation, isMobile');
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
      console.log('Has multitouch, isMobile');
    } else {
      var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
        console.log("Don't has pointer device, isMobile!");
      } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
        console.log('Has orientation, isMobile');
      } else {
        // Only as a last resort, fall back to user agent sniffing
        hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(ua) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(ua)
        );
        console.log('isMobile');
      }
    }
  };
  useEffect(() => {
    getDeviceType()
    console.log(ua);
  }, [])
  /* ======================= RENDERING ======================= */
  return (
    <div id='me' >
      {
        language.eng ? (
          <>
            <span id='las'>Lianel Artiles</span><br />
            <span id='dev'>FullStack Web and Mobile Developer</span><br />
            <span id='lema'>At last working on my pasion</span>
          </ >
        ) :
          language.esp ? (
            <>
              <span id='las'>Lianel Artiles</span><br />
              <span id='dev'>Desarrollador FullStack Web y Mobile</span><br />
              <span id='lema'>Finalmente haciendo lo que me apasiona</span>
            </>
          ) : (
              <>
                <span id='las'>Lianel Artiles</span><br />
                <span id='dev'>Développeur Web et Mobile FullStack</span><br />
                <span id='lema'>En travaillant enfin sur ma passion</span>
              </>
            )
      }
    </div>
  )
}

export default LandingPage
