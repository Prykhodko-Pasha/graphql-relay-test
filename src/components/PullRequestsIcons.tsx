import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { styled } from "@mui/system";
import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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

const pullRequestStatus = (node: any) => {
  if (node.mergeable === "MERGEABLE")
    return (
      <CheckIcon
        sx={{
          fontSize: "11px",
          backgroundColor: "green",
          borderRadius: "10px",
          border: "2px solid",
          borderColor: "white",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(6.5%, 6%)",
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
          transform: "translate(9.5%, 10%)",
        }}
      />
    );
  else
    return (
      <VisibilityOutlinedIcon
        sx={{
          fontSize: "16px",
          backgroundColor: "gray",
          borderRadius: "8px",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(9.5%, 10%)",
        }}
      />
    );
}

export const PullRequestsIcons = ({ nodes }: any) => {
  return (
    <AvatarGroup
      max={5}
      total={nodes.totalCount}
      spacing={8}
      variant="circular"
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "start",
        marginLeft: "8px",
      }}
    >
      {nodes.map((node: any, index: number) => (
        <StyledBadge
          // overlap="circular"
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
