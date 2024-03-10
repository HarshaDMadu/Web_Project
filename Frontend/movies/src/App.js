import Header from "./Components/Header";
import Movies from "./Components/Movies/Movies";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/HomePage";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <section>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Auth" element={<Auth />} />
          </Routes>
        
      </section>
      
    </div>
  );
}

export default App;
