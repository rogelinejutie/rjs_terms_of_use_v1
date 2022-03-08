import { Box, Button, Dialog } from "@mui/material"
import { BizLogo } from "../../../core/global/Icons"
import InstallLogo from '../../../assets/images/core/install_app.gif'
import { makeStyles } from "@mui/styles"

const custom = makeStyles(theme => ({
    bg1: {
        backgroundPosition: 'right', 
        backgroundSize: '61%',
        backgroundColor: '#fbfbfb',
        backgroundImage: `url(${InstallLogo})`,
        backgroundRepeat: 'no-repeat',
    }
}))

export const InstallPromotion = ({ install_state }) => {
    const classes = custom()

    const installHandler = async () => {
        if (install_state.prompt.data !== null) {
            install_state.prompt.data.prompt();
            const { outcome } = await install_state.prompt.data.userChoice;

            if (outcome === 'accepted') {
                install_state.ip.set({stat: false, prompt_type: null})
                localStorage.removeItem('mc_tool_session')
                window.location.href = '/'
            }
        }

    }

    const logoutHandler = () => {
        install_state.ip.set({stat: false, prompt_type: null})
        localStorage.removeItem('mc_tool_session')
        window.location.href = '/'
    }

    return (
        <Dialog open={install_state.ip.data.stat} keepMounted fullWidth={true} maxWidth={'md'} onClose={() => install_state.ip.set({stat: false, prompt_type: null})} PaperProps={{
            style: {
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }
        }}>
            <Box display="flex" justifyContent="center" height="400px">
                <Box borderRadius={4} p="16px 16px 0 0" bgcolor="secondary.light" width="100%" className={classes.bg1}>
                    <Box p={3} pt={5} pl={10} width="53%">
                        <Box display="flex" alignItems="center" mb={2}>
                            <Box /* component={motion.div} */ animate={{ x: [100, 0], rotate: [30, -30, 0], opacity: [0, 1]}} transition={{ duration: 0.8 }} mt={0.5} zIndex={2}>
                                <BizLogo size={60}/>
                            </Box>
                            <Box /* component={motion.div} */ animate={{ x: [-80, 0], opacity: [0, 1]}} transition={{ duration: 0.8, delay: 0.8 }} ml={1} zIndex={1}>
                                <Box color="primary.main" fontSize={24} >POF<strong>Yourtool</strong></Box>
                                <Box fontSize={12}>
                                    Powered by: POFSIS
                                </Box>
                            </Box>
                        </Box>
                        <Box fontSize={18} mb={1}><b>Before you proceed!</b></Box>
                        <Box textAlign="left" fontSize={14} mb={4}>
                            Let's make your extraordinary journey in POFSIS easier by installing POFYourtool in your device.
                        </Box>
                        <Box textAlign="center">
                            <Button variant="contained" color="primary" sx={{borderRadius: '8px', boxShadow: 'none', width: '100%'}} onClick={installHandler}> INSTALL NOW </Button>
                            {
                                install_state.ip.data.prompt_type === 'first_prompt' ? (
                                    <Box mt={3} fontSize={14}>Click outside to exit</Box>
                                ) : install_state.ip.data.prompt_type === 'logout' ? (
                                    <Box mt={3} fontSize={14} onClick={logoutHandler} className="c-pointer">Proceed to logout</Box>
                                ) : (
                                        
                                    <Box mt={3} fontSize={14} className="c-pointer"></Box>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}