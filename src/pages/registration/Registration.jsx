import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Registration = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    navigate("/login");
  };

  return (
    <div className="register">
      <Box width="330px">
        <Card className="card">
          <CardContent>
            <Typography variant="h6" className="heading">
              Register
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              width="295px"
              textAlign="center"
            >
              <Grid>
                <TextField
                  variant="standard"
                  required
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  margin="dense"
                  {...register("fullname")}
                  error={errors.fullname ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  textAlign="left"
                  fontSize="small"
                >
                  {errors.fullname?.message}
                </Typography>
              </Grid>
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
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  textAlign="left"
                  fontSize="small"
                >
                  {errors.email?.message}
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
              <Grid>
                <TextField
                  variant="standard"
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  textAlign="left"
                  fontSize="small"
                >
                  {errors.confirmPassword?.message}
                </Typography>
              </Grid>

              <Grid>
                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name="acceptTerms"
                      defaultValue="false"
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          color="primary"
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      textAlign="left"
                      fontSize="small"
                      color={errors.acceptTerms ? "error" : "inherit"}
                    >
                      I have read and agree to the Terms *
                    </Typography>
                  }
                />
                <br />
                <Typography
                  textAlign="center"
                  fontSize="small"
                  variant="inherit"
                  color="textSecondary"
                >
                  {errors.acceptTerms
                    ? "(" + errors.acceptTerms.message + ")"
                    : ""}
                </Typography>
              </Grid>
              <Button
                variant="contained"
                className="btn"
                onClick={handleSubmit(onSubmit)}
              >
                Sign up
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Registration;
