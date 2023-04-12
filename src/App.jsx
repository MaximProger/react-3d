import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { BoxPage, CubePage, EarthPage } from "./pages";

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="container mx-auto h-full">
        <Routes>
          <Route path="/" element={<CubePage />} />
          <Route path="/box" element={<BoxPage />} />
          <Route path="/earth" element={<EarthPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
