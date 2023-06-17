import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom"

import "./css/style.css"
import Contacts from "./pages/Contacts";
import Update from "./pages/Update";
import Add from "./pages/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts/>}/>
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
