import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <div>
            First Page <Link to="/second">Next</Link>
          </div>
        }
      />
      <Route
        path="/second"
        element={
          <div>
            Second Page <Link to="/third">Next</Link>
          </div>
        }
      />
      <Route
        path="/third"
        element={
          <div>
            Third Page <Link to="/fourth">Next</Link>
          </div>
        }
      />
      <Route
        path="/fourth"
        element={
          <div>
            Fourth Page <Link to="/">Again</Link>
          </div>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

