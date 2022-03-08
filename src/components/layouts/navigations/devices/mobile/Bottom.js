import { Box, Avatar } from "@mui/material"

const Bottom = () => {
    return (
        <Box height="6%">
            <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
                <Box><strong>POF</strong>Global Room</Box>
                <Avatar alt="Remy Sharp" src="https://i.insider.com/60c1df2b23393a00188e25da?width=1136&format=jpeg" />
            </Box>
        </Box>
    )
}

export default Bottom;