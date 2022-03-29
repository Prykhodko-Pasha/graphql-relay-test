import { VFC } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { StatusBadge } from './StatusBadge';
import { countDaysAgo } from '../helpers/countDaysAgo';
import { PullRequestsIcons } from './PullRequestsIcons';
import Paper from '@mui/material/Paper';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import { IssuesIcons } from './IssuesIcons';

export const RepoCard: VFC<Props> = ({
    name,
    lastCommitStatus,
    latestStatusUpdatedAt,
    packageJsonText,
    totalCountCommits,
    totalCountIssues,
    issues,
    totalCountPullRequests,
    pullRequests,
    forkCount,
}) => {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <StatusBadge lastCommitStatus={lastCommitStatus}>
                <Card sx={{ height: '250px' }}>
                    <CardContent>
                        <Paper
                            elevation={0}
                            sx={{
                                padding: '0 8px 0 4px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ddd',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: -10,
                                left: 14,
                            }}
                        >
                            <ForkRightIcon fontSize="small" color="disabled" />
                            <span data-testid="forkCount">{forkCount}</span>
                        </Paper>
                        <Typography
                            data-testid="name"
                            variant="h5"
                            align="left"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="caption"
                            align="left"
                            color="grey"
                            paragraph
                        >
                            <span data-testid="version">
                                {packageJsonText
                                    ? JSON.parse(packageJsonText).version ??
                                      '0.0.0'
                                    : '0.0.0'}
                            </span>
                            {' - '}
                            <span data-testid="updatedAt">
                                {latestStatusUpdatedAt
                                    ? countDaysAgo(latestStatusUpdatedAt)
                                    : '?'}
                            </span>
                            {' days ago - '}
                            <span data-testid="totalCountCommits">
                                {totalCountCommits}
                            </span>
                            {' commits'}
                        </Typography>
                        <List sx={{ width: '100%' }}>
                            <ListItem>
                                <Typography
                                    align="right"
                                    sx={{ width: '40%', marginRight: '16px' }}
                                >
                                    Issues
                                </Typography>
                                <IssuesIcons
                                    issues={issues}
                                    totalCountIssues={totalCountIssues}
                                />
                            </ListItem>
                            <ListItem>
                                <Typography
                                    align="right"
                                    sx={{ width: '40%', marginRight: '16px' }}
                                >
                                    Pull requests
                                </Typography>
                                <PullRequestsIcons
                                    nodes={pullRequests.nodes}
                                    totalCountPullRequests={
                                        totalCountPullRequests
                                    }
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </StatusBadge>
        </Grid>
    );
};

type Props = {
    name: string;
    lastCommitStatus: string | null;
    latestStatusUpdatedAt: Date | null;
    packageJsonText: string | null;
    totalCountCommits: number;
    totalCountIssues: number;
    issues: any;
    totalCountPullRequests: number;
    pullRequests: any;
    forkCount: number;
};
