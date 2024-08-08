import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function RootLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
