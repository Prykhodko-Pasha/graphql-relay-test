import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { RepoCard } from "./RepoCard";
import Typography from "@mui/material/Typography";

export const ReposList = ({ data }: any)=> {
  return (
    <Box sx={{ width: "95%", margin: "40px" }}>
      {data ? (
        <Grid container spacing={2}>
          {data.map((node: any, index: number) => (
            <RepoCard node={node} key={index} />
          ))}
        </Grid>
      ) : (
        <Typography component="h1" variant="h5" color="black">
          There is no such login &#128533;
        </Typography>
      )}
    </Box>
  );
}
