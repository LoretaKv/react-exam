import {
  Button,
  Input,
  InputLabel,
  ThemeProvider,
  Typography,
  Paper,
} from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../Header/HeaderTheme";

export const NewUserRegister = () => {
  const [newUser, setNewUser] = useState({
    name: null,
    surname: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: string
  ) => {
    setNewUser({
      ...newUser,
      [prop]: event.target.value,
    });
  };

  const resetForm = () => {
    setNewUser({ name: null, surname: null, email: null, password: null });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/register", {
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        password: newUser.password,
      })
      .then(() => {
        alert(`Welcome to "ALL IN ONE SPOT"! Happy Shopping!`);
        resetForm();
        navigate("/sale");
      })
      .catch((error) => {
        console.error(error.response.data.err);
      });
  };

  return (
    <Paper
      sx={{
        textAlign: "center",
        margin: "0 auto",
        display: "grid",
        maxHeight: { xs: 500, md: 500, lg: 1000 },
        maxWidth: { xs: 350, md: 500, lg: 1200 },
      }}
    >
      <Box border="2px,solid, grey" padding="10px">
        <ThemeProvider theme={theme}>
          <Typography marginY="20px" fontSize="30px">
            REGISTER
          </Typography>
        </ThemeProvider>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box>
          <InputLabel>Name:</InputLabel>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1, width: "30%" }}
            disableUnderline
            size="medium"
            name="Your Name"
            value={newUser.name ?? ""}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </Box>

        <Box>
          <InputLabel>Your Surname:</InputLabel>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1, width: "30%" }}
            disableUnderline
            size="medium"
            name="Your Surname"
            value={newUser.surname ?? ""}
            onChange={(event) => handleInputChange(event, "surname")}
          />
        </Box>

        <Box>
          <InputLabel>Your Email:</InputLabel>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1, width: "30%" }}
            disableUnderline
            size="medium"
            name="email"
            type="email"
            value={newUser.email ?? ""}
            onChange={(event) => handleInputChange(event, "email")}
          />
        </Box>

        <Box>
          <InputLabel>Your Password:</InputLabel>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1, width: "30%" }}
            disableUnderline
            size="medium"
            name="password"
            type="password"
            value={newUser.password ?? ""}
            onChange={(event) => handleInputChange(event, "password")}
          />
        </Box>

        <Box display="grid" textAlign="center" marginBottom="20px">
          <Button sx={{ padding: "30px" }} type="submit">
            Register
          </Button>

          <Link to="/" onClick={() => navigate(-1)}>
            Cancel
          </Link>
        </Box>
      </form>
    </Paper>
  );
};
