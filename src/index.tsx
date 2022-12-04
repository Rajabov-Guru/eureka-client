import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

// function checkAuth() {
//   const { data: res, isLoading } = useCheckAuthQuery();
//   const dispatch = useAppDispatch();
//   if (res) dispatch(setCredentials(res));
// }
//
// checkAuth();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
