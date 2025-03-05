import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";  // Import Create component
import Read from "./components/Read";      // Import Read component
import Update from "./components/Update";  // Import Update component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
