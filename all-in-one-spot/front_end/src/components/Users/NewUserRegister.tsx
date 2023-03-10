import { Label } from "@mui/icons-material";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        alert(`User was created successfully!`);

        resetForm();
      })
      .catch((error) => {
        console.error(error.response.data.err);
      });
  };

  return (
    <>
      <Box border="2px,solid, grey">
        <Typography>Register:</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label>Name:</Label>

          <Input
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            size="medium"
            name="Your Name"
            value={newUser.name ?? ""}
            onChange={(event) => handleInputChange(event, "name")}
          />
        </Box>
        <Box>
          <Label>Your Surname:</Label>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            size="medium"
            name="Your Surname"
            value={newUser.surname ?? ""}
            onChange={(event) => handleInputChange(event, "surname")}
          />
        </Box>
        <Box>
          <Label>Your Email:</Label>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            size="medium"
            name="email"
            type="email"
            value={newUser.email ?? ""}
            onChange={(event) => handleInputChange(event, "email")}
          />
        </Box>
        <Box>
          <Label>Your Password:</Label>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            size="medium"
            name="password"
            type="password"
            value={newUser.password ?? ""}
            onChange={(event) => handleInputChange(event, "password")}
          />
        </Box>
        <Link to="/" onClick={() => navigate(-1)}>
          Cancel
        </Link>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
