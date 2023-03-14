import {
  Button,
  Card,
  Input,
  InputLabel,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../Header/HeaderTheme";

export const UserSignIn = () => {
  const [signInUser, setsignInUser] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: string
  ) => {
    setsignInUser({
      ...signInUser,
      [prop]: event.target.value,
    });
  };

  const resetForm = () => {
    setsignInUser({ email: null, password: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/signin", {
        email: signInUser.email,
        password: signInUser.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        navigate("/sale");
      })
      .catch(() => {
        alert("Incorrect email or password");
        resetForm();
      });
  };

  return (
    <Card
      sx={{
        marginTop: "20px",
        textAlign: "center",
        margin: "0 auto",
        display: "grid",
        maxHeight: { xs: 500, md: 500, lg: 1000 },
        maxWidth: { xs: 350, md: 500, lg: 1200 },
        width: "40%",
      }}
    >
      <Box border="2px,solid, grey">
        <ThemeProvider theme={theme}>
          <Typography marginY="20px" fontSize="30px">
            SIGN IN
          </Typography>
        </ThemeProvider>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box>
          <InputLabel>Your Email:</InputLabel>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1, width: "40%" }}
            disableUnderline
            name="email"
            type="email"
            value={signInUser.email ?? ""}
            onChange={(event) => handleInputChange(event, "email")}
          />
        </Box>

        <Box>
          <InputLabel>Your Password:</InputLabel>
          <Input
            sx={{
              marginTop: "10px",
              border: "1px solid green",
              borderRadius: 1,
              width: "40%",
            }}
            disableUnderline
            size="medium"
            name="password"
            type="password"
            value={signInUser.password ?? ""}
            onChange={(event) => handleInputChange(event, "password")}
          />
        </Box>

        <Button sx={{ color: "green", fontSize: "20px" }} type="submit">
          GET SHOPPING
        </Button>
      </form>
    </Card>
  );
};
