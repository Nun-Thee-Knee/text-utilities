import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState({
    "background": "white",
    "button": "primary",
    "color": "black",
    "nav": "light"
  })
  const  changeAlert = async (msg) => {
    setInterval(() => {
      setAlert(null)
    }, 5000);
    setAlert(msg);
  }

  function setTheme(bg,but,col,nav)
  {
    setMode({
      "background":bg,
      "button": but,
      "color": col,
      "nav": nav
    });
    document.body.style.backgroundColor = bg;
    document.body.style.color = col;
  }
  return (
    <>
    <NavBar showAlert={changeAlert} color={mode.color} nav={mode.nav} setTheme={setTheme}/>
    <Alert alert={alert}/>
      <TextForm color={mode.background} but={mode.button} />
    </>
  );
}

export default App;
