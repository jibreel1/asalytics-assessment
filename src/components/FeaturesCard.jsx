import { Box } from "@mui/material";

const FeaturesCard = ({ name, logo, available }) => {
   return (
      <Box
         sx={{
            border: "1px solid #B7BECC",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "10px",
            width: { xs: "100%", sm: "300px" },
            height: "185px",
            py: "32px",
            px: "20px",
         }}
      >
         <img src={logo} alt="logo" className="card-logo" />
         <Box fontSize="24px" fontWeight="400" textAlign="center">
            {name}
         </Box>
         <Box
            sx={{
               color: "#fff",
               bgcolor: available ? "#6FD791" : "#BC3131",
               p: "8px 10px",
               borderRadius: "8px",
            }}
         >
            {available ? <p>Available</p> : <p>Unavailable</p>}
         </Box>
      </Box>
   );
};

export default FeaturesCard;
