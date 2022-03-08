import { Box, Grid, Container } from '@mui/material'
import { useContext, useState } from 'react'
import { ToolContext } from '../../core/context/ToolContext'
import { DailyGraph } from './DailyGraph'
import { Overview } from './Overview'

export const Statistics = () => {
    const { statistics_state } = useContext(ToolContext)
    console.log(statistics_state);
    const [oprops] = useState([
        {name: 'affected', xs: 6, bgcolor: 'primary.main'},
        {name: 'death', xs: 6, bgcolor: 'success.main'},
        {name: 'active', xs: 4, bgcolor: 'error.dark'},
        {name: 'serious', xs: 4, bgcolor: 'info.main'},
        {name: 'recovered', xs: 4, bgcolor: 'warning.main'}
    ])
    
    return (
        <Container>            
            <Grid container spacing={3}>
                {
                    statistics_state.overview.data.map((o, k) => {
                        let op = oprops.filter(op => op.name === o.name.toLowerCase())
                        if (op.length > 0) {
                            return <Overview key={k} overview={{...op[0], ...o, name: o.name.toLowerCase()}} />
                        } else{
                            return o
                        }
                    })
                }
            </Grid>
            <Box bgcolor="gray" p={4} borderRadius={4} color="#fff" mt={4}>
                <DailyGraph />
            </Box>
        </Container>
    )
}