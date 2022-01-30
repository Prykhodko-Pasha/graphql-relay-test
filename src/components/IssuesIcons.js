// import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import BugReportIcon from "@mui/icons-material/BugReport";

export default function IssuesIcons({ issues }) {
  return (
    <AvatarGroup
      max={5}
      total={issues.totalCount}
      spacing={"8"}
      variant="circular"
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {issues.nodes.map((node, index) => (
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: "5px",
            border: "2px solid",
            borderColor: "white",
            backgroundColor: `#${node.labels.nodes[0]?.color ?? "ddd"}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          <BugReportIcon sx={{ color: "white" }} />
        </Box>
      ))}
    </AvatarGroup>
  );
}