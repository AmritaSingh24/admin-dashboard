import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="register">
      <Box width="330px">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" className="heading">
              Register
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              width="295px"
              textAlign="center"
            >
                  <TextField
                label="Name"
                variant="standard"
                required
              />
                <TextField
                label="Email"
                variant="standard"
                required
                type="email"
              />
              <TextField
                label="Phone"
                variant="standard"
                required
                type="number"
              />
                <TextField
                label="Password"
                variant="standard"
                required
                type="password"
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="standard"
                required
              />
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="contained" className="btn">
                  Sign up
                </Button>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Registration;
