import { Route, Routes } from "react-router-dom";
import { ProgressProvider } from "./hooks/ProgressContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";
import MapPage from "./pages/MapPage";
import QuizzesPage from "./pages/QuizzesPage";
import ProgressPage from "./pages/ProgressPage";

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}
