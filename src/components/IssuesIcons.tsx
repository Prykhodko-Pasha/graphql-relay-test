import { VFC } from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import BugReportIcon from '@mui/icons-material/BugReport';

export const IssuesIcons: VFC<Props> = ({ labels, totalCount }) => {
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
                alignItems: 'center',
            }}
        >
            {labels.map((label: string, index: number) => (
                <Box
                    sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '5px',
                        border: '2px solid',
                        borderColor: 'white',
                        backgroundColor: `#${label}`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    key={index}
                >
                    <BugReportIcon sx={{ color: 'white' }} />
                </Box>
            ))}
        </AvatarGroup>
    );
};

type Props = { labels: string[]; totalCount: number };
