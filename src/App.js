import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Cart from "./cart";
import Select from "./Select";

function App() {
  return (
    <div className="App">
      <Select />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
