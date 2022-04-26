import React from 'react';
import { PullRequestNode } from '../types';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const pullRequestStatus = (node: PullRequestNode): JSX.Element => {
    if (node.mergeable === 'MERGEABLE')
        return (
            <CheckIcon
                sx={{
                    fontSize: '11px',
                    backgroundColor: 'green',
                    borderRadius: '10px',
                    border: '2px solid',
                    borderColor: 'white',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(6.5%, 6%)',
                }}
            />
        );
    else if (node.isDraft)
        return (
            <AccessTimeOutlinedIcon
                sx={{
                    fontSize: '16px',
                    backgroundColor: 'gray',
                    borderRadius: '8px',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(9.5%, 10%)',
                }}
            />
        );
    else
        return (
            <VisibilityOutlinedIcon
                sx={{
                    fontSize: '16px',
                    backgroundColor: 'gray',
                    borderRadius: '8px',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(9.5%, 10%)',
                }}
            />
        );
};

export default pullRequestStatus;
