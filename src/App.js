import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Landing from "./Pages/Landing";
// import Solution from "./Pages/Solution";
import Aboutus from "./Pages/Aboutus";
import Footer from "./Components/About/Footer";
import Footer1 from "./Components/About/Footer1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/solution" element={<Solution />} /> */}
        </Routes>
        <Footer/>
        <Footer1/>
      </BrowserRouter>
    </div>
  );
}

export default App;
