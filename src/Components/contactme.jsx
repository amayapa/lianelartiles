/* ======================== IMPORTATIONS ========================= */
import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../Styles/contactme.css'
import emailjs, { init } from 'emailjs-com';

init("user_mF5LDF8IugLjLsmSkJldy");

const ContactMe = (props) => {
  /* ======================= STATE & VARS ======================== */
  const language = props.language;
  const [span, setSpan] = useState('')
  const [string, setString] = useState({ firstline: '', secondLine: '' })
  const [state, setState] = useState({ name: '', email: '', body: '' })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [Err, setErr] = useState({
    emptyField: "",
    invalidEmailFormat: "",
  });
  const templateId = 'template_hzuwv1r';
  const englishFL = 'Hello!,'
  const englishSL = 'Do not hesitate to write to me, I will be happy to collaborate on your project, let me know how I can be of help. Greetings.';
  const spanishFL = 'Hola!,';
  const spanishSL = 'No dudes en escribirme, estaré encantado de colaborar en tu proyecto, déjame saber como puedo ser de ayuda. Saludos.'
  const frenchFL = 'Bonjours!,';
  const frenchSL = "N'hésitez pas à m'écrire, je serai très heureux de collaborer sur votre projet, faites-moi savoir comment je peux vous aider. Salutations.";
  let i = 0;
  let f = 0;
  let interval, intervalo;
  let firstline = '';
  let secondLine = '';

  /* ======================== FUNCTIONS ========================= */
  const sendEmail = (e) => {
    e.preventDefault();
    const valid = validateForm()
    if (valid) {
      setLoading(true);
      emailjs.send('service_vyjgfjc', templateId, {
        message: state.body,
        from_name: state.name,
        reply_to: state.email,
        to_name: 'imadev'
      })
        .then((result) => {
          if (result.text === 'OK') {
            setLoading(false)
            setSuccess(true)
          }
          console.log('result', result.text);
        }, (error) => {
          console.log('Error', error.text);
        });
      e.target.reset();
    }
  }

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    setErr({
      emptyField: "",
      invalidEmailFormat: "",
    });
    let emptyField = "";
    let invalidEmailFormat = "";

    if (!state.name || !state.email || !state.body) {
      emptyField = language.eng ? "All fields must be completed" : language.esp ? 'Todos los campos deben ser completados' : 'Tous les champs doivent etre completé';
    }
    else if (!/\S+@\S+\.\S+/.test(state.email)) {
      invalidEmailFormat = language.eng ? "Invalid email format" : language.esp ? 'Fomato de correo inválido' : "Le format de l'email n'est pas valide";
    }
    if (emptyField || invalidEmailFormat) {
      setErr({ emptyField, invalidEmailFormat });
      return false;
    } else return true;
  };

  function displayChars() {
    interval = setInterval(displayFirstLine, 100);
    setTimeout(() => {
      intervalo = setInterval(displaySecondLine, 50);
      setIsDone(!isDone)
    }, 2500);
  }

  function displayFullFrase() {
    if (language.eng) {
      firstline = englishFL;
      secondLine = englishSL;
      setString({
        firstline,
        secondLine
      })
    }
    else if (language.esp) {
      firstline = spanishFL;
      secondLine = spanishSL;
      setString({
        firstline,
        secondLine
      })
    }
    else {
      firstline = frenchFL;
      secondLine = frenchSL;
      setString({
        firstline,
        secondLine
      })
    }
  }

  const displayFirstLine = () => {
    if (language.eng) {
      if (i < englishFL.length) {
        firstline = firstline + englishFL[i] + '|'
        setString({
          firstline: firstline,
        })
        i++
        firstline = firstline.slice(0, -1)
        return
      }
      else {
        clearInterval(interval);
      }
    }
    else if (language.esp) {
      if (i < spanishFL.length) {
        firstline = firstline + spanishFL[i] + '|'
        setString({
          firstline: firstline,
        })
        i++
        firstline = firstline.slice(0, -1)
        return
      }
      else {
        clearInterval(interval);
      }
    }
    else {
      if (i < frenchFL.length) {
        firstline = firstline + frenchFL[i] + '|'
        setString({
          firstline: firstline,
        })
        i++
        firstline = firstline.slice(0, -1)
        return
      }
      else {
        clearInterval(interval);
      }
    }
  }

  function displaySecondLine() {
    if (language.eng) {
      if (f < englishSL.length) {
        secondLine = secondLine + englishSL[f] + '|'
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        f++
        secondLine = secondLine.slice(0, -1)
      }
      else {
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        clearInterval(intervalo);
        setSpan(f)
        i = 0;
      }
    }
    else if (language.esp) {
      if (f < spanishSL.length) {
        secondLine = secondLine + spanishSL[f] + '|'
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        f++
        secondLine = secondLine.slice(0, -1)
      }
      else {
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        clearInterval(intervalo);
        setSpan(f)
        i = 0;
      }
    }
    else {
      if (f < frenchSL.length) {
        secondLine = secondLine + frenchSL[f] + '|'
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        f++
        secondLine = secondLine.slice(0, -1)
      }
      else {
        setString({
          firstline: firstline,
          secondLine: secondLine
        })
        clearInterval(intervalo);
        setSpan(f)
        i = 0;
      }
    }
  }
  useEffect(() => {
    const display = isDone ? displayFullFrase() : displayChars()
    // eslint-disable-next-line
  }, [language])

  /* ======================== RENDERING ========================= */
  return (
    <div className='contactme-container'>
      <p id='intro'>
        🤗{string.firstline}<br />
        {string.secondLine}{span === 141 ? <span></span> : null}
      </p>
      <form onSubmit={(e) => sendEmail(e)}>
        <div id='wrap'>
          <input
            name='name'
            id='name'
            className='form'
            type="text"
            placeholder={language.eng ? 'name' : language.esp ? 'nombre' : 'nom'}
            onChange={e => handleOnChange(e)}
          />
          <input
            name='email'
            id='email'
            className='form'
            type="text"
            placeholder={language.eng ? 'email' : language.esp ? 'correo electrónico' : 'email'}
            onChange={e => handleOnChange(e)}
          />
          <textarea
            style={{ resize: 'none' }}
            name='body'
            id='body'
            wrap='soft'
            className='form'
            rows="15" cols="33"
            placeholder={language.eng ? 'Your message' : language.esp ? 'Su mensaje' : 'Votre message'}
            onChange={e => handleOnChange(e)}
          />
          <button
            id='btn'
            className='form'
          ><p>{language.eng ? 'SEND' : language.esp ? 'ENVIAR' : 'ENVOYER'}</p>
          </button>
        </div>
        {
          Err.emptyField ||
            Err.invalidEmailFormat ? (
              <div className='error'>
                {Err.emptyField ? <span>{Err.emptyField}<br /></span> : null}
                {Err.invalidEmailFormat ? <span>{Err.invalidEmailFormat}<br /></span> : null}
              </div>
            ) : null
        }
        {
          loading ? (
            <div className='circular'>
              <CircularProgress color='inherit' />
            </div>
          ) : success ? (
            <div className='success'>
              <span>
                {language.eng ? "Email sent successfully" : language.esp ? 'Correo electrónico enviado con éxito' : "E-mail envoyé avec succès"}
              </span>
            </div>
          ) : null
        }
      </form>
    </div>
  )
}

export default ContactMe;
