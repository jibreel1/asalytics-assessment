import gql from "graphql-tag";
import { useGQLQuery } from "./useGQLQuery";
import { Box, Backdrop, CircularProgress } from "@mui/material";

import Navbar from "./components/Navbar";
import Features from "./components/Features";

import "./App.scss";

const GET_ASALIST = gql`
   query {
      asalist {
         results {
            name
            logo
            available
            assetId
         }
      }
   }
`;

const App = () => {
   const { data, isLoading, error } = useGQLQuery("asalist", GET_ASALIST);

   if (isLoading)
      return (
         <Backdrop
            sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
            open
         >
            <CircularProgress color="inherit" />
         </Backdrop>
      );
   if (error) return <div>Something went wrong...</div>;

   return (
      <Box
         sx={{
            mx: { xs: "24px", sm: "48px", lg: "63px" },
         }}
      >
         <Navbar />
         <Features data={data} />
      </Box>
   );
};

export default App;
