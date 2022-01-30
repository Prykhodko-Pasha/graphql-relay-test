import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { styled } from "@mui/system";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import CheckIcon from "@mui/icons-material/Check";

const StyledBadge = styled(BadgeUnstyled)`
  position: relative;

  & .MuiBadge-badge {
    min-width: 13px;
    height: 13px;
    padding: 0;
    color: #fff;
    background-color: transparent;
    border-radius: 10px;
    overflow: hidden;
  }

  & .MuiBadge-anchorOriginBottomRight {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-10%, 0%);
  }
`;

function pullRequestStatus(node) {
  if (node.mergeable === "MERGEABLE")
    return (
      <CheckIcon
        fontSize="16px"
        sx={{
          backgroundColor: "green",
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "white",
        }}
      />
    );
  else if (node.isDraft)
    return (
      <AccessTimeOutlinedIcon
        sx={{
          fontSize: "16px",
          backgroundColor: "gray",
          borderRadius: "8px",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(8.5%, 13%)",
        }}
      />
    );
  else
    return (
      <CheckIcon
        fontSize="small"
        sx={{ backgroundColor: "green", borderRadius: "10px" }}
      />
    );
}

export default function PullRequestsIcons({ nodes }) {
  return (
    <AvatarGroup
      max={5}
      total={nodes.totalCount}
      spacing={"8"}
      variant="circular"
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "start",
        marginLeft: "8px",
      }}
    >
      {nodes.map((node, index) => (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={pullRequestStatus(node)}
          key={index}
        >
          <Avatar alt={`author-${index}`} src={node.author.avatarUrl} />
        </StyledBadge>
      ))}
    </AvatarGroup>
  );
}
