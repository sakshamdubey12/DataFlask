import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Form from "./Components/form"; // Import the form component
import AddUser from "./Components/adduser"; // Import the form component
import AddRole from "./Components/addrole"; // Import the form component
import AddIntent from "./Components/addintent"; // Import the form component
import BotTraining from "./Components/bottraining"; // Import the form component



function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/form" element={<Form />} /> {/* Add a route for the form component */}
        <Route path="/adduser" element={<AddUser />} /> {/* Add a route for the form component */}
        <Route path="/addrole" element={<AddRole />} /> {/* Add a route for the form component */}
        <Route path="/addintent" element={<AddIntent />} /> {/* Add a route for the form component */}
        <Route path="/bottraining" element={<BotTraining />} /> {/* Add a route for the form component */}
      </Routes>
    </Router>
  );
}
export default App;
