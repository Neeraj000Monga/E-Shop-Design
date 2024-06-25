import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container component="main" sx={{ justifyContent: "space-evenly" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{ height: "85vh", overflow: "hidden" }}
        >
          <Box sx={{ width: "33.4%", position: "absolute" }}>
            <Box
              sx={{ background: "#00aeae", width: "100%", height: "85vh" }}
            />
          </Box>
          <Box
            sx={{
              background: "#089d9d",
              width: "36vh",
              height: "36vh",
              borderRadius: "50%",
              position: "relative",
              right: "2rem",
              bottom: "2rem",
            }}
          />
          <Box
            sx={{
              background: "#089d9d",
              width: "36vh",
              height: "36vh",
              borderRadius: "50%",
              position: "relative",
              left: "17rem",
              top: "7rem",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={8} md={3} elevation={6} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Fab
              sx={{ background: "#00aeae" }}
              size="medium"
              color="secondary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>

            <Typography
              sx={{ fontWeight: 700, marginBottom: "10px" }}
              variant="h5"
            >
              APP NAME
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                textAlign: "center",
              }}
              variant="h5"
            >
              Lorem ipsum dolor, sit amet adipisicing qui rerum natus
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: "20px",width: "100%", }}
            >
              <TextField
                variant="standard"
                size="small"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />

              <Input
                fullWidth
                id="password"
                type={!showPassword ? "text" : "password"}
                defaultValue="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="password"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "#00aeae" }} />
                      ) : (
                        <Visibility sx={{ color: "#00aeae" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />

              <Button
                sx={{ background: "#00aeae", borderRadius: "10px", mt: 2 }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Login
              </Button>
              <Grid container sx={{ mt: 2, mb: 1 }}>
                <Grid item xs>
                  <Typography> Don't have an account?</Typography>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {" Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
