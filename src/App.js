import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/Photo';
import Title from "./components/Title";
import Explanation from './components/Explanation'

function App() {

  const [nasaData, setNasaData] = useState("");
  console.log(nasaData)
  
  useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    setNasaData(res.data);
  })
  .catch(err => {
    console.err(err);
  })
}, []);

  return (
    <div className="App">
      <h1>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <Title photoTitle={nasaData.title}/>
      <Photo photoURL={nasaData.url}/>
      <Explanation explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
