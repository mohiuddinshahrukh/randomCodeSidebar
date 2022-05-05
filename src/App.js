import "./App.css";
import Sidebar from "./components/Sidebar";
import ViewPort from "./ViewPort";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <ViewPort />
    </Router>
  );
}

export default App;
