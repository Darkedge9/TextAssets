// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
// import About from './components/About';
import { useState } from 'react';
import Alert from "./components/Alert"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    });
     setTimeout(() => setAlert(null), 2000);
  }

  const changeTheme = (bgColor, textColor) => {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
};


  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#063450';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextAssets - Dark Mode"
        // setInterval(() => {
        //   document.title = "TextAssets is Amazing "
          
        // }, 2000);
        // setInterval(() => {
        //   document.title = "install TextAssets now "
          
        // }, 1000);

      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = "TextAssets - Light Mode"
    }
  }
  return (
      <>
  {/* <Router> */}
    <Navbar title="TextAssets" about="AboutUs" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route
          exact path="/"
          element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* }
        />
      </Routes> */}
    </div>
  {/* </Router> */}
</>

  );
}

export default App;

