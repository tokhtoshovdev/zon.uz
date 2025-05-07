import { Route, Routes } from "react-router-dom";
import { Home, Like, Shop } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/like" element={<Like />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
