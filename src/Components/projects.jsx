import React from 'react'
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { projects } from '../data/projects';
import Download from '../images/components/Download';
import GitHubLogo from '../images/components/GitHub'
import WWW from '../images/components/WWW';
import '../Styles/projects.css'

const Projects = (props) => {
  const { language, darkMode } = props;

  const JSXTooltip = withStyles(() => ({
    tooltip: {
      backgroundColor: !darkMode ? '#b8b8b8' : '#292a2e',
      maxWidth: 320,
      fontSize: 16,
      padding: 15,
      borderRadius: 10
    },
  }))(Tooltip);

  const defineTextLanguage = (project) => {
    const lang = language.eng ? 'eng' : language.esp ? 'esp' : 'fre';
    return project.technologies.texts?.[lang]?.map((tech, index) => (
      <li key={index}>
        <span className={darkMode ? 'toolTip-lightText' : 'toolTip-text'}>{tech}</span>
      </li>
    ))
  }

  return (
    <div id='projects-container'>
      <h1>{language.eng ? 'Projects' : language.esp ? 'Proyectos' : 'Des Projects'}</h1>
      <div className="cards-container">
        {
          projects.map((project, index) => {
            return (
              <div className="project-card" key={index}>
                <JSXTooltip
                  title={
                    <>
                      <h3 className={darkMode ? 'toolTip-lightText' : 'toolTip-text'}>{project.name}</h3>
                      <p className={darkMode ? 'toolTip-lightText' : 'toolTip-text'}>
                        {language.eng ? project.engText : language.esp ? project.spaText : project.freText}
                      </p>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          filter: 'drop-shadow(2px 2px 2px rgb(27, 27, 27))'
                        }}
                      >
                        {project.technologies.icons.map((tech) => (
                          <img
                            src={tech}
                            alt='ups'
                            width='50'
                            height='50'
                            style={{ padding: 5 }} />
                        ))}
                      </div>
                      <ul>
                        {Object.keys(project.technologies.texts).length > 0 && (
                          <li>
                            <span className={darkMode ? 'toolTip-lightText' : 'toolTip-text'}>
                              {language.eng ? 'And:' : language.esp ? 'Ademas:' : 'En plus:'}
                            </span>
                          </li>
                        )}
                        {defineTextLanguage(project)}
                      </ul>
                    </>
                  }
                >
                  <p id="about">?</p>
                </JSXTooltip>
                <img src={project.logo} alt="ups" id='logo' />
                <div className="card-links">
                  {project.repo && (<a
                    id="gitLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.repo}
                  >
                    <GitHubLogo
                      size={{ width: "30", height: "30" }}
                      darkMode={darkMode}
                      colors={{ light: 'white', dark: '#201E1E' }}
                    />
                  </a>)}
                  {project.webSite && (<a
                    id="webLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.webSite}
                  >
                    <WWW
                      size={{ width: "30", height: "30" }}
                      darkMode={darkMode}
                      colors={{ light: 'white', dark: '#201E1E' }}
                    />
                  </a>)}
                  {project.download &&
                    <a
                      id="downloadLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.download}
                    >
                      <Download
                        size={{ width: "30", height: "30" }}
                        darkMode={darkMode}
                        colors={{ light: 'white', dark: '#201E1E' }}
                      />
                    </a>}
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <Message language={language} darkMode={darkMode} /> */}
    </div>
  )
}

export default Projects
