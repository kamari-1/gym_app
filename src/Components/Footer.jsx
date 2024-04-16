import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" py="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="20px">
          Made with ❤️ by{" "}
          <a
            href="https://kamari-1.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ color: "#000" }}>Clement Oboh</span>
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
