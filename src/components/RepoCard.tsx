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

export const RepoCard = ({ node }: any) => {
    const {
        deployments,
        name,
        packageJSON,
        object,
        issues,
        pullRequests,
        forkCount,
    } = node;
    return (
        <Grid item xs={12} md={6} lg={4}>
            <StatusBadge
                lastCommitStatus={
                    deployments.nodes[0]?.latestStatus.state || null
                }
            >
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
                            {forkCount}
                        </Paper>
                        <Typography variant="h5" align="left">
                            {name}
                        </Typography>
                        <Typography
                            variant="caption"
                            align="left"
                            color="grey"
                            paragraph
                        >
                            {`${
                                packageJSON
                                    ? JSON.parse(packageJSON.text).version ??
                                      '0.0.0'
                                    : '0.0.0'
                            } - ${
                                deployments.nodes[0]
                                    ? countDaysAgo(
                                          deployments.nodes[0].latestStatus
                                              .updatedAt,
                                      )
                                    : '?'
                            } days ago - ${
                                object?.history.totalCount ?? 0
                            } commits`}
                        </Typography>
                        <List sx={{ width: '100%' }}>
                            <ListItem>
                                <Typography
                                    align="right"
                                    sx={{ width: '40%', marginRight: '16px' }}
                                >
                                    Issues
                                </Typography>
                                <IssuesIcons issues={issues} />
                            </ListItem>
                            <ListItem>
                                <Typography
                                    align="right"
                                    sx={{ width: '40%', marginRight: '16px' }}
                                >
                                    Pull requests
                                </Typography>
                                <PullRequestsIcons nodes={pullRequests.nodes} />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </StatusBadge>
        </Grid>
    );
};
