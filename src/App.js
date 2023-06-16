import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import StaffPswd from "./components/Staff/StaffPswd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StaffPswd />} /> {/* Set the path and element for your route */}
        <Route path="/staff" element={<StaffPswd />} /> {/* Set the path and element for your route */}
      </Routes>
   
    </div>
  );
}

export default App;
