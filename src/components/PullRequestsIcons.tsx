import React, { VFC } from 'react';
import { styled } from '@mui/system';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';

import { PullRequestIcon } from '../types';

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

export const PullRequestsIcons: VFC<Props> = ({ icons, totalCount }) => {
    return (
        <AvatarGroup
            max={5}
            total={totalCount}
            spacing={8}
            variant="circular"
            sx={{
                width: '50%',
                display: 'flex',
                justifyContent: 'start',
                marginLeft: '8px',
            }}
        >
            {icons.map(({ avatar, status }, index: number) => (
                <StyledBadge
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={status}
                    key={index}
                >
                    <Avatar alt={`author-${index}`} src={avatar || ''} />
                </StyledBadge>
            ))}
        </AvatarGroup>
    );
};

type Props = {
    icons: PullRequestIcon[];
    totalCount: number;
};
