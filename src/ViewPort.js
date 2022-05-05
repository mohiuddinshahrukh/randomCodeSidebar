import styled from "styled-components";
import Sidebar from "../src/components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";

const ViewPort = () => {
  const Content = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    color: red;
    border: 1px solid blue;
    margin-left: 300px;
    height: 100vh;
  `;

  return (
    <div className="view-port">
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route
            path="/serviceCategories/RegisterToCategory"
            exact
            element={<Reports />}
          />
          <Route
            path="/serviceCategories/myServices"
            exact
            element={<ReportsOne />}
          />
          <Route path="/reports/reports2" exact element={<ReportsTwo />} />
          <Route path="/reports/reports3" exact element={<ReportsThree />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
      </Content>
    </div>
  );
};

export default ViewPort;
