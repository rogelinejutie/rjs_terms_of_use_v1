import { useEffect } from 'react';
import { Box, Container } from '@mui/material';

export const Home = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container>
            <Box display="flex">
                Dashboard / Home Feature
            </Box>
        </Container>
    )
}
