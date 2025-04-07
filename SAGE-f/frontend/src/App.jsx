import { BrowserRouter,Routes, Route } from "react-router-dom"
import Master from "./User/Master"
import Home from "./User/Home"
import AboutUs from "./User/AboutUs"
import Collections from "./User/Collections"


function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/collections" element={<Collections/>}/>



      </Route>
    </Routes>
    
    </BrowserRouter>
   

    </>
  )
}

export default App
