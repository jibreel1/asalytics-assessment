import { Stack, Box } from "@mui/material";
import Logo1 from "../assets/logo1.png";

const Navbar = () => {
   return (
      <Stack
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         mt="32px"
      >
         <img src={Logo1} alt="logo" className="logo" />
         <Box
            sx={{
               color: "#fff",
               bgcolor: "#000",
               p: { xs: "15px 30px", md: "20px 40px" },
               borderRadius: "8px",
               cursor: "pointer",
            }}
         >
            <p className="navbar-button">ANALYZE ASAs</p>
         </Box>
      </Stack>
   );
};

export default Navbar;
