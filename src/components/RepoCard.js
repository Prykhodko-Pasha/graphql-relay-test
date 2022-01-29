import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StatusBadge from "./StatusBadge";

export default function RepoCard({ node }) {
  console.log("node :>> ", node);
  const { deployments, name, packageJSON, object } = node;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <StatusBadge deployNodes={deployments.nodes}>
        <Box
          sx={{
            display: "block",
            height: "200px",
            backgroundColor: "white",
            padding: "16px",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h5" align="left" color="black">
            {name}
          </Typography>
          <Typography variant="caption" align="left" color="grey" paragraph>
            {`${
              packageJSON
                ? JSON.parse(packageJSON.text).version ?? "0.0.0"
                : "0.0.0"
            } - ${
              deployments.nodes[0]?.latestStatus.updatedAt ?? "?"
            } days ago - ${object?.history.totalCount ?? 0} commits`}
          </Typography>
        </Box>
      </StatusBadge>
    </Grid>
  );
}
