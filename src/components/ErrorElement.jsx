import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops, Page Not Found</h1>
      <h1>{error.error.message}</h1>
    </div>
  );
};

export default ErrorElement;
