import Welcome from "../pages/Welcome";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import myBoards from "../pages/Profile";
import Board from "../pages/Board";
import { IRoute } from "../types/main";

export const paths = {
  WELCOME: "/",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  MY_BOARDS: "/profile",
};

export const routes: IRoute[] = [
  {
    route: paths.WELCOME,
    Component: Welcome,
  },
  {
    route: paths.REGISTRATION,
    Component: Registration,
  },
  {
    route: paths.LOGIN,
    Component: Login,
  },
  {
    route: paths.MY_BOARDS,
    Component: myBoards,
  },
  {
    route: `${paths.MY_BOARDS}/:board`,
    Component: Board,
  },
];
