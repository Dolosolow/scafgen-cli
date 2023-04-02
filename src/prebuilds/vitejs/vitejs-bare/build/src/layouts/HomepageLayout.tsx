import { Outlet } from "react-router-dom";

export function HomepageLayout() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
}
