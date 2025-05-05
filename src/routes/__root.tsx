import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-full lg:w-[1200px] min-h-screen">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  ),
});
