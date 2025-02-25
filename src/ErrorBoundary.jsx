import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    try {
      setHasError(true);
    } catch (error) {
      console.log("ERROR, Comes from Error Boundary", error)
    }
  };

  useEffect(() => {
    const errorHandler = (event) => {
      handleError(event.error);
      return false; // Prevent default error handling
    };

    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>; // Fallback UI
  }

  return children;
};

export default ErrorBoundary;
