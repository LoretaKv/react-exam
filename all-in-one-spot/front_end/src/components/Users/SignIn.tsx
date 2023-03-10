import { Label } from "@mui/icons-material";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
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
      .then(() => {
        resetForm();
        navigate("/products");
      })
      .catch(() => {
        alert("Incorrect email or password");
        resetForm();
      });
  };

  return (
    <>
      <Box border="2px,solid, grey">
        <Typography>Sign in:</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label>Your Email:</Label>
          <Input
            sx={{ border: "1px solid green", borderRadius: 1 }}
            disableUnderline
            size="medium"
            name="email"
            type="email"
            value={signInUser.email ?? ""}
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
            value={signInUser.password ?? ""}
            onChange={(event) => handleInputChange(event, "password")}
          />
        </Box>

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
