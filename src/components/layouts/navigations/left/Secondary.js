import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { InputBase, Box, AppBar, Toolbar, Typography, useMediaQuery, Container, Button, Badge } from '@mui/material';
import { BizLogo, ArrowBottom } from '../../../../core/global/Icons';
import { ToolTip } from '../../../../core/global/ToolTip';
import { Setting } from './Setting';
import { env, pm } from '../../../../core/Env';
import { ToolContext } from '../../../../core/context/ToolContext';
// import { globalrqx } from '../../../../core/request/API';
import IPofsis from '../../../../assets/images/logos/logo_v1.png';

const __SESSION = JSON.parse(localStorage.getItem('mc_tool_session'))

export const Secondary = ({ classes }) => {
    const { navigation_state, install_state } = useContext(ToolContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const __LOCATION = useLocation().pathname.split('/')[1] 
    const sp = useMediaQuery('(max-width:1279px)');
    const xl = useMediaQuery('(min-width:1921px)');
    const history = useHistory()
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        e.preventDefault()
        if (anchorEl === null) {
            setAnchorEl(e.currentTarget);
        }else{
            setAnchorEl(null);
        }
    };

    const loginHandler = () => {
        const url = pm(env(), 'url')
        window.location.href = `${url}/sso/rqx?from=MC_SSO_RQX&callback=${env()==='dev'?'development':env()}&platform=personal`
    }
 
    return (
        <AppBar position="fixed" className={classes.appbar} style={{backgroundColor: 'white'}} elevation={0}>
            <Toolbar variant="dense">
                <Box component={xl ? Container : ''} display="flex" alignItems="center"  width="100%" height="56px">
                    <Box position="fixed" left={0} width="200px" ml={2}>
                        <Box display="flex" alignItems="center" onClick={() => history.push('/')} className="c-pointer">
                            <Box mr={2} mt={1} pl={.3}><BizLogo size={40} br={5}/></Box>
                            <Typography variant="h6" noWrap color="#000" fontSize={16}>POF<b>Yourtool</b></Typography>
                        </Box>
                    </Box>
                    <Box marginLeft="170px" marginRight="500px" width="100%" display="flex" justifyContent="center" alignItems="center">
                        <InputBase placeholder="Search" inputProps={{ 'aria-label': 'Search' }} sx={{backgroundColor:"#F6F6F6", borderRadius:'7px', padding:'5px 5px 5px 20px', width:`${sp ? '100%' : '542px'}`, height:'40px'}}/>
                    </Box>
                    <Box right={0} position="fixed" width="500px" mr={2}>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" justifyContent="flex-end" width="50%" mt={1} mx={2} pr={2}>
                                {
                                    navigation_state.tabs.data.map((v,k) => (
                                        <ToolTip key={k} title={v.name} arrow sx={{marginLeft: '16px'}}>
                                            <Badge color="error" badgeContent={1}>
                                                <Link to={v.subdir} className={__LOCATION === v.ref ? classes.active : classes.notActive}>
                                                    <Box>{__LOCATION === v.ref ? v.active: v.not_active}</Box>
                                                </Link>
                                            </Badge>
                                        </ToolTip>
                                    ))
                                }
                            </Box>
                                {
                                    __SESSION !== null ? (
                                        <Box display="flex" justifyContent="space-between" alignItems="center" width="50%" >
                                            <Box width="70%" height="40px" display="flex" alignItems="center" border="solid 1px" borderColor="#F6F6F6" borderRadius={3} pr={2}>
                                                <Box mr={2}>
                                                    <Box className="personal-logo-flat-top" borderRadius={3} overflow="hidden" style={{
                                                        backgroundImage: `url(${__SESSION.pinfo.length > 0 ? JSON.parse(__SESSION.pinfo[0].profile).profile !== null ? JSON.parse(__SESSION.pinfo[0].profile).profile : IPofsis : IPofsis})`, 
                                                        backgroundSize: 'cover', 
                                                        minWidth: '40px', 
                                                        minHeight:'40px'
                                                    }}/>
                                                </Box>
                                                <Typography variant="h6" noWrap color="black" fontSize={14}>
                                                    {
                                                        __SESSION.pinfo.length > 0 ? `${__SESSION.pinfo[0].first_name} ${__SESSION.pinfo[0].last_name}` : 'Anonymous'
                                                    }
                                                </Typography>
                                            </Box>
                                            <Box onClick={(e)=>handleClick(e)} border="solid 1px" borderColor="#F6F6F6" bgcolor="#F6F6F6" borderRadius={3} px={2} className="c-pointer">
                                                <Box mt={1} >
                                                    <ArrowBottom/>
                                                </Box>
                                                <Setting anchorEl={anchorEl} open={open} setAnchorEl={setAnchorEl} install_state={install_state} />
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Box display="flex" justifyContent="space-between" alignItems="center" width="50%">
                                            <Button variant="contained" color="secondary" sx={{borderRadius: '10px'}} fullWidth onClick={loginHandler}>Login</Button>
                                        </Box>
                                    )
                                }
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}