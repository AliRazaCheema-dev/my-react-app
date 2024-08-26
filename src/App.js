import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [color, setNewColor] = useState("light")
  function toggleSwitch() {
    if(color === "light"){
    setNewColor("dark");
    document.body.style.backgroundColor="#212529";
    showAlert("success", "dark mode is on");
  }
    else{
      setNewColor("light");
      document.body.style.backgroundColor="white";
      showAlert("success", "light mode is on");
    }
  }
  function btnBackground(color) {

    setNewColor(color);
    document.body.style.backgroundColor=color;
    showAlert(`success, ${color} mode is on`);  
    
  }
  const [alert, newAlert] = useState(null)
  function showAlert(type, message) {
    newAlert({
      type:type,
      msg:message
    });
    setTimeout(() => {
      newAlert(null);
    }, 3000);
  }
  return (
   <>
   {/* <Router> */}
  <Navbar  abouttext="About Us" mode={color} btnColor={toggleSwitch} btnBackground={btnBackground}/>
  <Alert alert={alert} />
  <TextForm heading="Enter the text to analyze here" showAlert={showAlert} />
  {/* <Routes> */}
   {/* <Route exact path="/about" element={<About />} /> exact is used to exactly match the path */}
  {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze here" showAlert={showAlert} />} /> */}
{/* </Routes> */}
  {/* </Router> */}
   </>
  );
}
export default App;
