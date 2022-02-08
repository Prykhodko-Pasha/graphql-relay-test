import { VFC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const LoadingSkeleton: VFC = () => {
    return (
        <Box sx={{ width: '95%', margin: '40px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Skeleton variant="rectangular" height={250} />
                </Grid>
            </Grid>
        </Box>
    );
};
