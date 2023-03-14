import { Grid, Typography, BottomNavigation } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <BottomNavigation
      sx={{
        alignContent: "center",
        marginTop: "auto",
        height: "60px",
      }}
    >
      <Grid display="flex" gap="8px" bottom="25px" paddingTop="20px">
        <FacebookIcon sx={{ color: "green" }} />
        <InstagramIcon sx={{ color: "green" }} />
        <EmailIcon sx={{ color: "green" }} />
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
    </BottomNavigation>
  );
};
