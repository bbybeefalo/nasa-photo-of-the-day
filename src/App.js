import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Photo from './components/Photo';
import Title from "./components/Title";
import Explanation from './components/Explanation'

function App() {
  const [nasaData, setNasaData] = useState('');
  const [date, setDate] = useState('')

  useEffect(() => {
    axios.get(date ? `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}` : 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [date]);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  let today = new Date().toISOString().slice(0, 10)

  return (
    <div className="App">
      <h1 className="App-header">
        NASA Photo of the Day<br></br> {!date ? today : date}
      </h1>
      <div>
        <input type='date' onChange={handleChange}></input>
      </div>
      <Title photoTitle={nasaData.title} />
      <div className="Content">
        <Photo photoURL={nasaData.url} explanation={nasaData.explanation} />
        <Explanation explanation={nasaData.explanation} />
      </div>
    </div>
  );
}

export default App;
