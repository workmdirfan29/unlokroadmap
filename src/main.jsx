import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import "./index.css"

const Spinner = lazy(() => import("./Spinner"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary>
        <RouterProvider router={Routes} />
      </ErrorBoundary>
    </Suspense>
  </StrictMode>
);
