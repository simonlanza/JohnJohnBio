import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Error from "./components/Error"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
