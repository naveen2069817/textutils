import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';




function App() {

const [mode, setMode] = useState('light')
const [textName, setTextName] = useState('Enabble Dark Mode')
const [alert, setAlert] = useState(null)

const showAlert = (message,type)=>{

  setAlert({
    msg : message,
  type : type,
  })

  setTimeout(()=>{
       setAlert(null);
  },1500
  )
}



const toggleMode =()=>
{
  if(mode==='light'){
    setMode('dark')
    setTextName('Disable Dark Mode')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark Mode has been enabled","success")
  }
  else{
    setMode('light')
    setTextName('Enable Dark Mode')
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled","success")
  }
}

  return (
    
<>

   <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} textName={textName}/>
   <Alert  alert={alert}/>
   <div className="container my-3">
    
    
   <Textform  showAlert={showAlert} heading='Enter the Text to Analyze' mode={mode}/>
   
   </div>

   </>
  );
  
}

export default App;
