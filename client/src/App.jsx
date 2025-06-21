import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewStudents from "./pages/ViewStudents";
import InsertStudent from "./pages/InsertStudent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewStudents />} />
          <Route path="/insert" element={<InsertStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
