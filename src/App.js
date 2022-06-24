import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Error from "./components/Error";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLogged={setIsLogged} />}
          />
          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
