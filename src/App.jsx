
import Card from './cards.jsx';
import Summary from './summary.jsx';
import Tools from './Tools.jsx';
import linkedinImg from './assets/linkedin-icon.png';
import educationImg from './assets/education-icon.png';
import experienceImg from './assets/experience-icon.png';
import projectImg from './assets/projects-icon.png';
import toolsImg from './assets/tools-img.png';
import githubImg from './assets/github-icon.png';
import Project from './Project.jsx';
import tictactoe from './assets/tic-tac-toe.png';
import sokoban from './assets/sokoban.png';
import currencyconverter from './assets/currencyconverter.png';
import colorpicker from './assets/colorpicker.png';
import pinball from './assets/pinball.png';
import bubbleshooter from './assets/bubbleshooter.png';
import blockparty from './assets/BlockParty.png';
import pressured from './assets/Pressured.png';

function App() {

  const cards = [{
    id: 1,
    title: "Projects",
    info: "Applications and games showcasing my development skills.",
    url: '#projects',
    img: projectImg
  },
  {
    id: 2,
    title: "Experience",
    info: "Practical experience demonstrating leadership,responsibility, and technical execution. ",
    url: 'https://www.linkedin.com/in/hemanth-reddy1508/',
    img: experienceImg
  },
  {
    id: 3,
    title: "Education",
    info: "Computer Science background with strong fundamentals in software engineering.",
    url: 'https://www.linkedin.com/in/hemanth-reddy1508/',
    img: educationImg

  },
  {
    id: 4,
    title: "LinkedIn",
    info: "Connect with me professionally and explore my career journey.",
    url: 'https://www.linkedin.com/in/hemanth-reddy1508/',
    img: linkedinImg
  },
  {
    id: 5,
    title: "GitHub",
    info: "Discover my code repositories and technical contributions.",
    url: 'https://github.com/HemanthReddy1518',
    img: githubImg
  },
  {
    id: 6,
    title: "Toolbox",
    info: "The technologies, tools, and frameworks I use to build applications and games.",
    url: "#tools",
    img: toolsImg

  }

  ];

  const projects = [
    {
      id: 1,
      Name: "Block Party",
      toolsused: "haxe, SublimeText",
      details: `Collaborated on "Block Party" : 2-player race to 10 gems using
                dice rolls and special tiles (bonuses, penalties, checkpoints, black holes).
                Integrated core gameplay, UI elements, sounds, animations, and robust state handling.`,
      img: blockparty
    },
    {
      id: 2,
      Name: "Pressured",
      toolsused: "Unity, C#",
      details: `Co-developed "PRESSURED" a 2D puzzle-platformer where players push crates onto cyan tiles to unlock doors and advance levels while slicing chasing enemies.`,
      img: pressured
    },
    {
      id: 3,
      Name: "Pinball",
      toolsused: "Unity, C#",
      details: `Developed a classic Pinball simulation in Unity using C#,
      featuring physics- based gameplay, custom scoring mechanics,
    and engaging player feedback systems.`,
      img: pinball

    },
    {
      id: 4,
      Name: "CurrrencyConverter",
      toolsused: "VanillaJS",
      details: `Developed a real - time Currency Converter using Vanilla JavaScript 
                and Fetch API, fetching live exchange rates for instant two - way conversions
                between multiple currencies.`,
      img: currencyconverter
    },
    {
      id: 5,
      Name: "colorPicker",
      toolsused: "React",
      details: `Created a responsive Color Picker tool in React with 
                intuitive UI controls for precise color selection,
    supporting hex, RGB, and HSL formats with live updates`,
      img: colorpicker
    },
    {
      id: 6,
      Name: "Tic-Tac-Toe",
      toolsused: "VanillaJS",
      details: `mplemented a two - player Tic - Tac - Toe board in Vanilla JS, utilizing
                DOM manipulation, event listeners, and array - based state management
  for efficient gameplay logic.`,
      img: tictactoe
    },
    {
      id: 7,
      Name: "Bubbleshooter",
      toolsused: "Unity,C#",
      details: `Built an engaging Bubble Shooter prototype in Unity / C#, implementing
  mouse - aimed shooting, collision - based snapping, match - 3 detection
    (3 + same colors), and dynamic grid updates.`,
      img: bubbleshooter
    },
    {
      id: 8,
      Name: "SokobanProject",
      toolsused: "haxe, SublimeText",
      details: `Built a Sokoban clone in Haxe with HaxeFlixel framework, implementing precise
                tilemap navigation, pushable crates, target goals, and win - state logic.`,
      img: sokoban

    }
  ];

  const summary = `Third - year Computer Science student with strong foundations in Data Structures, Algorithms,
                    and Object - Oriented Programming.Experienced in building responsive and user - focused web applications
                    using React, JavaScript, HTML, and CSS, with hands - on project development including interactive tools 
                    and browser - based games.Passionate about crafting clean, intuitive UI while writing efficient, scalable code. 
                    Currently expanding expertise in full - stack development and exploring machine learning. Actively seeking frontend,
                    full stack, or software engineering internships where I can contribute to high - quality product development 
                    and grow within a collaborative engineering team.`;
  return (
    <>
      <Summary
        summary={summary}
        name="Hemanth Reddy Basireddy">
      </Summary>

      <div className="cards-container">

        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            info={card.info}
            url={card.url}
            img={card.img}
          />
        ))}

      </div>
      <div className='projects-container' id="projects">
        <h3>My Projects</h3>
        {projects.map(project => (
          <Project
            id={project.id}
            projectName={project.Name}
            tools={project.toolsused}
            details={project.details}
            img={project.img}
          />
        ))}
      </div>
      <div className='tools-container' id="tools">
        <h3>My ToolBox</h3>
        <Tools />
      </div>
    </>
  );
}

export default App