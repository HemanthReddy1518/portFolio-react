import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

{/* <Card title="Projects"
          info="Applications and games showcasing my development skills."
          url='https://www.linkedin.com/in/hemanth-reddy1508/'
          img={projectImg}
        >
        </Card>

        <Card title="Experience"
          info="Practical experience demonstrating leadership,
              responsibility, and technical execution. "
          url='https://www.linkedin.com/in/hemanth-reddy1508/'
          img={experienceImg}
        >
        </Card>

        <Card title="Education"
          info="Computer Science background with strong fundamentals 
        in software engineering."
          url='https://www.linkedin.com/in/hemanth-reddy1508/'
          img={educationImg}
        >
        </Card>

        <Card title="LinkedIn"
          info="Connect with me professionally and explore my career journey."
          url='https://www.linkedin.com/in/hemanth-reddy1508/'
          img={linkedinImg}
        >
        </Card>

        <Card title="GitHub"
          info="Discover my code repositories and technical contributions."
          url='https://github.com/HemanthReddy1518'
          img={githubImg}
        >
        </Card>

        <Card title="Toolbox"
          info="The technologies, tools, and frameworks 
        I use to build applications and games."
          url='https://www.linkedin.com/in/hemanth-reddy1508/'
          img={toolsImg}
        >
        </Card> */}

//      return (
//     < div className='cards'>
//         <a href={url} target="_main">
//             <img src={img} alt={title}></img>
//         </a>
//         <h4>{title}</h4>
//         <p>{info}</p>

//     </div>
// );