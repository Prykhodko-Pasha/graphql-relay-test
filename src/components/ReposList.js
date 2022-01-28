import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ReposList({ data }) {
  return (
    <Box sx={{ width: "98%", padding: "20px 0" }}>
      <Grid container spacing={2}>
        {data.map((node, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                height: "200px",
                backgroundColor: "white",
                padding: "16px",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="h5"
                align="left"
                color="black"
                // paragraph
              >
                {node.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
