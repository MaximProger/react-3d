import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { BoxPage, CubePage, EarthPage, PhotosPage, RainbowPage } from "./pages";

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<CubePage />} />
          <Route path="/box" element={<BoxPage />} />
          <Route path="/earth" element={<EarthPage />} />
          <Route path="/rainbow" element={<RainbowPage />} />
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
