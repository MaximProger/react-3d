import { BoxCanvas, CubeCanvas } from "./components";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="container mx-auto h-full">
        <Routes>
          <Route path="/" element={<CubeCanvas />} />
          <Route path="/box" element={<BoxCanvas />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
