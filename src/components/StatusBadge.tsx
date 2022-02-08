import { styled } from '@mui/system';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const StyledBadge = styled(BadgeUnstyled)`
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    position: relative;
    display: inline-block;
    line-height: 1;

    & .MuiBadge-badge {
        z-index: auto;
        min-width: 20px;
        height: 20px;
        padding: 0;
        color: #fff;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        white-space: nowrap;
        text-align: center;
        background-color: grey;
        border-radius: 10px;
    }

    & .MuiBadge-anchorOriginTopRight {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        transform-origin: 100% 0;
    }
`;

const lastCommitStatusIcon = (status: string) => {
    if (status === 'SUCCESS')
        return (
            <CheckIcon
                fontSize="small"
                sx={{ backgroundColor: 'green', borderRadius: '10px' }}
            />
        );
    else {
        return (
            <CloseIcon
                fontSize="small"
                sx={{ backgroundColor: 'red', borderRadius: '10px' }}
            />
        );
    }
};

export const StatusBadge = ({ deployNodes, children }: any) => {
    return deployNodes[0] ? (
        <StyledBadge
            badgeContent={lastCommitStatusIcon(
                deployNodes[0].latestStatus.state,
            )}
        >
            {children}
        </StyledBadge>
    ) : (
        <StyledBadge badgeContent={'?'}>{children}</StyledBadge>
    );
};
