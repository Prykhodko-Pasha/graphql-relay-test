import { VFC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { RepoCard } from './RepoCard';
import Typography from '@mui/material/Typography';
import type { graphqlQuery$data } from '../__generated__/graphqlQuery.graphql';
import { QueryResContext } from './Context';

export const ReposList: VFC<Prop> = ({ data }) => {
    // const Context = createContext(data);
    return (
        <QueryResContext.Provider value={data}>
            <Box sx={{ width: '95%', margin: '40px' }}>
                {data ? (
                    <Grid container spacing={2}>
                        {data.user?.repositories.nodes?.map(
                            (node: any, index: number) => (
                                <RepoCard
                                    key={index}
                                    name={node.name}
                                    lastCommitStatus={
                                        node.deployments.nodes[0]?.latestStatus
                                            .state || null
                                    }
                                    latestStatusUpdatedAt={
                                        node.deployments.nodes[0]?.latestStatus
                                            .updatedAt || null
                                    }
                                    packageJsonText={
                                        node.packageJSON?.text || null
                                    }
                                    totalCountCommits={
                                        node.object?.history.totalCount || 0
                                    }
                                    issues={node.issues}
                                    pullRequests={node.pullRequests}
                                    forkCount={node.forkCount}
                                />
                            ),
                        )}
                    </Grid>
                ) : (
                    <Typography component="h1" variant="h5" color="black">
                        There is no such login &#128533;
                    </Typography>
                )}
            </Box>
        </QueryResContext.Provider>
    );
};

type Prop = {
    data: graphqlQuery$data;
};
