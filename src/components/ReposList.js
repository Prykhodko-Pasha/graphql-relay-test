import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RepoCard from "./RepoCard";

export default function ReposList({ data }) {
  return (
    <Box sx={{ width: "95%", margin: "40px" }}>
      <Grid container spacing={2}>
        {data.map((node, index) => (
          <RepoCard node={node} key={index} />
        ))}
      </Grid>
    </Box>
  );
}
