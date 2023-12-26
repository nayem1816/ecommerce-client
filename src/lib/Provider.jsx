"use client";

import { store } from "@/redux/store/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
