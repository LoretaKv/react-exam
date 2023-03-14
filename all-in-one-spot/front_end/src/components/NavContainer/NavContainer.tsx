import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentReturnRoundedIcon from "@mui/icons-material/AssignmentReturnRounded";

export const NavContainer = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        backgroundImage: `url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <Grid
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "flex-start",

          marginTop: "10px",
          width: "max-content",
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/user">
          <Typography marginTop="8px" variant="h4" color="#37474f">
            Sign in
          </Typography>
        </Link>

        <Grid item xs={6}>
          <Button onClick={() => navigate(-1)}>
            <AssignmentReturnRoundedIcon
              sx={{
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
                color: "#37474f",
                width: "60px",
                height: "50px",
              }}
            />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Link to="/">
            <HomeRoundedIcon
              sx={{
                color: "#37474f",
                width: "60px",
                height: "60px",
              }}
              fontSize="large"
            />
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};
