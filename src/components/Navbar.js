import { Stack, Box } from "@mui/material";
import Logo1 from "../assets/logo1.png";

const Navbar = () => {
   return (
      <Stack
         className="navbar"
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         mt="32px"
      >
         <img src={Logo1} alt="logo" />
         <Box
            sx={{
               color: "#fff",
               bgcolor: "#000",
               p: "20px 40px",
               borderRadius: "8px",
               cursor: "pointer",
            }}
         >
            <p>ANALYZE ASAs</p>
         </Box>
      </Stack>
   );
};

export default Navbar;
