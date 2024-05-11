import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Footer />

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/" exact Component={Categories} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
