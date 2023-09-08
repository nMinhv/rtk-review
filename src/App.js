import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/admin/cars" element={<CarList />}></Route>
        <Route path="/admin/cars/add" element={<CarForm />}></Route>
        <Route path="admin/cars/edit/:id" element={<CarForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
