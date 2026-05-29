import { Route, Routes } from "react-router-dom";
import { ProgressProvider } from "./hooks/ProgressContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CivilizationPage from "./pages/CivilizationPage";
import MapPage from "./pages/MapPage";
import ProgressPage from "./pages/ProgressPage";

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="civilization/:id" element={<CivilizationPage />} />
          <Route path="atlas" element={<MapPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}
