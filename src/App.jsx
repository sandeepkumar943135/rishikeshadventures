import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PackageDetails from "./pages/PackageDetails";
import Activities from "./pages/Activities";
import Camping from "./pages/Camping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/all-activities" element={<Activities />} />
        <Route path="/activity/camping" element={<Camping />} />
        <Route path="/package/:id/:slug" element={<PackageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;