import { Stack, Box, Backdrop, CircularProgress } from "@mui/material";
import FeaturesCard from "./FeaturesCard";

const Features = ({ data, loading }) => {
   return (
      <Stack mt="75px">
         <Box
            data-testid="feature-text"
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               fontSize: { xs: "24px", lg: "36px" },
               textAlign: "center",
               fontWeight: "500",
            }}
         >
            List of Algorand Standard Assets <br /> on ASAlytics
         </Box>
         {loading ? (
            <Backdrop
               sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
               open
            >
               <Box
                  sx={{
                     fontSize: { xs: "24px", lg: "36px" },
                     mr: "10px",
                  }}
               >
                  Loading
               </Box>
               <CircularProgress color="inherit" />
            </Backdrop>
         ) : (
            <Box mt="106px" mb="64px" className="featureBox">
               {data?.asalist?.result.map(
                  ({ name, assetId, logo, available }) => (
                     <FeaturesCard
                        name={name}
                        key={assetId}
                        logo={logo}
                        available={available}
                     />
                  )
               )}
            </Box>
         )}
      </Stack>
   );
};

export default Features;
