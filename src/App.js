import "./App.css";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { HashRouter as Router } from "react-router-dom";
import bgImage from "./images/background-4.jpg";

function App() {
  return (
    <Router>
      <div className="App container mx-auto px-8">
        <img
          src={bgImage}
          alt="sfondo"
          className="fixed -z-10 top-0 left-0 h-screen w-screen object-cover opacity-55"
        />
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen gap-10 text-white">
          <div className="order-2 lg:order-1">
            <Navbar />
          </div>
          <div className="order-1 lg:order-2">
            <MainContent />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
