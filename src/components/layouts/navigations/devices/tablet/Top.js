import { AppBar, Toolbar, Box, Typography} from '@mui/material';
import Poficon from '../../../../../assets/images/logos/logo_v1.png'

const Top = () => {
	return (
		<AppBar position="fixed">
            <Toolbar variant="dense">
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}><img src={Poficon} alt="POFSIS LOGO"  width="30"/></Box>
                        <Typography variant="h6" noWrap><strong>Management</strong> Tool</Typography>
                    </Box>
                    <Box display="flex">
                        <Box mr={4}><Typography><strong>My Personal</strong></Typography></Box>
                        <Box><Typography><strong>My Business</strong></Typography></Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
	);
}


export default Top;