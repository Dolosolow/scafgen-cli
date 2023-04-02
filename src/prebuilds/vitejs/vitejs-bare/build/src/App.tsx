import { Routes, Route } from "react-router-dom";
import { Homepage } from "pages/homepage";
import { HomepageLayout } from "layouts/index";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}
