import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Global/Header";
import Grid from "./component/Grid/Grid";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Grid />} />
      </Routes>
    </Router>
  );
}

export default App;
