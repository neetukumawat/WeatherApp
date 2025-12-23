
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from './components/weather/Weather'


function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Weather/>}/>
   
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
