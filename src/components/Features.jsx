import { Stack, Box } from "@mui/material";
import FeaturesCard from "./FeaturesCard";

const Features = ({ data }) => {
   return (
      <Stack mt="75px">
         <Box
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
         <Box mt="106px" mb="64px" className="featureBox">
            {data?.asalist?.results.map(
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
      </Stack>
   );
};

export default Features;
