import { Box, Grid } from '@mui/material'
export const Overview = ({ overview }) => {
    return (
        <Grid item xs={overview.xs}>
            <Box bgcolor={overview.bgcolor} p={3} borderRadius={3} color="#fff">
                <Box component="b" fontSize={18}>{overview.name}</Box>
                <Box mt={3}>{overview.value}</Box>
            </Box>
        </Grid>
    )
}
