import { Button} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="container_fluid">
        <h1>404</h1>
        <p>Opps! page not found</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" className="btn">Back </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
