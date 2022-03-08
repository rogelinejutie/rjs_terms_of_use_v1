import { Route, Switch } from 'react-router-dom';
import { Home } from '../../components/home/Index';
import { Statistics } from '../../components/statistics/Index';
import { Box, Container } from '@mui/material';

export const WebRoute = () => {
    return (
        <Switch>
            {/* HOME ROUTES */}
            <Route exact path="/" render={props=>(<Home {...props} />)} />

            {/* STATISTICS ROUTES */}
            <Route exact path="/statistics" render={props=>(<Statistics {...props} />)} />

            {/* 404 NOT FOUND */}
            <Route>
                <Container>
                    <Box display="flex">
                        Error 404
                    </Box>
                </Container>
            </Route>
        </Switch>
    )
}
