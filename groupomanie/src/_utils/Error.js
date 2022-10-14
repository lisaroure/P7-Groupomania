import React from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../pages/Admin";

const Error = () => {
  return (
    <div className="error">
      <h1>Error 404 !</h1>
      <p>
        Vous souhaitiez afficher <Link to={"/users"}>ceci ?</Link>
      </p>
      <p>
        Vous êtes admin ? Cliquez <Link to={<Dashboard />}>ici.</Link>
      </p>
    </div>
  );
};

export default Error;
