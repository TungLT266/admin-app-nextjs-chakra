import { IRoute } from "module/sidebar/interface/IRoute";
import routes from "module/sidebar/routes";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[]): IRoute => { 
  const foundRoute: IRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.path) !== -1 &&
      route
  );

  return foundRoute;
};

export const getActiveRoute = (): string => {
  const route = findCurrentRoute(routes);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbar = (): boolean => {
  const route = findCurrentRoute(routes);
  return route?.secondary;
};

export const getActiveNavbarText = (): string | boolean => {
  return getActiveRoute() || false;
};
