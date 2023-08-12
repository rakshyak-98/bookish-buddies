import { Outlet } from "../node_modules/react-router-dom/dist/index";

export default function Layout() {
  return (
    <section className={"layout__grid"}>
        <Outlet />
    </section>
  )
}
