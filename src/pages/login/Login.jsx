import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    localStorage.setItem("token", "dashboard");
    navigate("/");
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

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
              <Grid>
                <TextField
                  variant="standard"
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  margin="dense"
                  {...register("username")}
                  error={errors.username ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  textAlign="left"
                  fontSize="small"
                >
                  {errors.username?.message}
                </Typography>
              </Grid>
              <Grid>
                <TextField
                  variant="standard"
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register("password")}
                  error={errors.password ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  textAlign="left"
                  fontSize="small"
                >
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Button
                variant="contained"
                className="btn"
                onClick={handleSubmit(handleLogin)}
              >
                Login
              </Button>

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
