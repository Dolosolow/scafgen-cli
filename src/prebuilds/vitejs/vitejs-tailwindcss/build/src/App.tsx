import { HomepageLayout } from "layouts/index";
import { Homepage } from "pages/homepage";
import { Route, Routes } from "react-router-dom";

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
