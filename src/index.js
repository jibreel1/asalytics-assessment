import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryclient = new QueryClient();

ReactDOM.render(
   <QueryClientProvider client={queryclient}>
      <App />
   </QueryClientProvider>,
   document.getElementById("root")
);
