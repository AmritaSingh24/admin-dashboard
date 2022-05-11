import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/");
  };
  return (
    <div className="container">
      <Box width="300px">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" className="heading">
              Login
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              width="265px"
              textAlign="center"
            >
              <TextField
                label="Username"
                variant="standard"
                required
                className="input"
                onChange={(e) => setUser(e.target.value)}
              />
              <TextField
                className="input"
                label="Password"
                type="password"
                variant="standard"
                required
              />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className="btn"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Link>

              <p className="text">
                Don't have an account
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button>Sign up</Button>
                </Link>
              </p>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
