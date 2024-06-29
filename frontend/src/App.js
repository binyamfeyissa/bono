import "./App.css";
// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Menus from "./components/pages/Menus";
import Orders from "./components/pages/Orders";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Transactions from "./components/pages/Transactions";
import Employees from "./components/pages/Employees";
import Users from "./components/pages/Users";

//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Routes>
          <Route
            path="/home"
            element={
              <Main name="Dashboard">
                <Dashboard />
              </Main>
            }
          ></Route>
          <Route
            path="/menus"
            element={
              <Main name="Menus">
                <Menus />
              </Main>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <Main name="Orders">
                <Orders />
              </Main>
            }
          ></Route>
          <Route
            path="/transactions"
            element={
              <Main name="Transactions">
                <Transactions />
              </Main>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <Main name="Users">
                <Users />
              </Main>
            }
          ></Route>
          <Route
            path="/Employees"
            element={
              <Main name="Employees">
                <Employees />
              </Main>
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <Main name="Settings">
                <Settings />
              </Main>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Main name="Profile">
                <Profile />
              </Main>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
