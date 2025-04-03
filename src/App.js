import photo from './photo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-photo" alt="logo" />
        <p>
        Welcome to my portfolio website .This site is developed using React js.
        hope you will find the site helpful .Thank you.
        </p>
      
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1CqfpF-z1PEn0M2iZ_xknxGg_ZST6kJz2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
         Download Resume 
        </a>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/pankaj-dharmajidnyasu-a92087247/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Linked In
        </a>
        
        <a
          className="App-link"
          href="https://github.com/dharmajidnyasupankaj"
          target="_blank"
          rel="noopener noreferrer"
        >
      Github
        </a>






      </header>
    </div>
  );
}

export default App;
