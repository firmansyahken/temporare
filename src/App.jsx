import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Indonesia from "./pages/Indonesia/Indonesia";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Provinsi from "./pages/Provinsi/Indonesia";
import About from "./pages/About/About";
import ScrollTop from "./utils/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/indonesia" element={<Indonesia/>}></Route>
          <Route path="/provinsi" element={<Provinsi/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
