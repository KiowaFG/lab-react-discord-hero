import './App.css';
import Header from "./components/Header"
import "./components/Header.css"
import backgroundArt from "./assets/discord-background.png"


function App() {
  return (
    <>
      <Header />
      <div className="App"></div>
      <h1>IMAGINE A PLACE...</h1>
      <p>We just learned the basics of React, JSX and how to set up a new React app using Vite. In this exercise, we will apply the newly acquired React skills to clone the landing page of Discord, specifically, the hero section. The "hero section" refers to the first part of a webpage that user sees before they scroll down, and is meant to quickly catch the viewer's attention. Let's get started!</p>
      <ul>
        <li><button className='button1'>Download for Mac</button></li>
        <li><button className='button2'> Open Discord in your browser</button></li>
      </ul>
      <div>
      <img className='backgroundArt' src={backgroundArt} alt="background Art" />
      </div>
    </>
  );
}

export default App;