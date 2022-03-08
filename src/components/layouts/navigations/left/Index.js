import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Secondary } from './Secondary';
// import { Primary } from './Primary';

const Left = () => {
    const useStyles = makeStyles((theme) => ({
        appbar: {
            top: 48,
        },
        active: {
            transition:1,
            borderBottom:'solid 3px',
            borderColor:'#FF4B00 !important'
        },
        notActive: {
            transition:1,
            borderBottom:'solid 3px',
            borderColor:'#ffffff !important'
        }
    }));
    let classes = useStyles()
    
    return (
        <Box>
            <Secondary classes={classes} />
            <Box mt={5}>
                {/* <Primary location={location}/> */}
            </Box>
        </Box>
    );
}
export default Left;