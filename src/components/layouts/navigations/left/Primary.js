import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Fade, useMediaQuery  } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { ToolsCategory, ProfileAdd, ProgArrow, ArrowDownLine } from '../../../../core/global/Icons';
import { ToolContext } from '../../../../core/context/ToolContext';
import { ToolTip } from '../../../../core/global/ToolTip';
import CompanyProfile from '../../../../assets/images/earth.gif';
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';

export const Primary = ({location}) => {
    const tc = useContext(ToolContext);
    const sp = useMediaQuery('(max-width:1199px)');
    const useStyles = makeStyles((theme) =>
        createStyles({
            active: {
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration[tc.isShow],
                }),
                marginLeft:'72px',
            },
            notActive: {
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration[!tc.isShow],
                }),
                marginLeft:'-270px',
            },
            btn:{
                '&:hover': {
                    backgroundColor: '#D0F9E5',
                    borderRadius:'5px',
                    padding:'8px',
                    width:"100%"
                },
            }
        }),
    );
    const classes = useStyles();
    useEffect(() => {
        if (window.innerWidth <= 1199) {
            tc.setIsShow(false)
        }else{
            tc.setIsShow(true)
        }
        // eslint-disable-next-line
    }, [sp])

    const toggleDrawer = (newOpen) => () => {
        tc.setIsShowMyTools(newOpen);
    };
    
    return (
        <Box>
            <Box position="fixed" width="72px" height="100%" bgcolor="white" zIndex={1000}>
                <Box height="85vh" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                    <Box textAlign="center">
                        <Box mt={5} pl={.5}>
                            {/* <BizLogo size={40} br={5}/> */}
                            <img src={CompanyProfile} alt="CompanyProfile" style={{width:'41px', height:'41px', borderRadius:'8px'}} />
                        </Box>
                        <ToolTip title="Business Tools" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} placement="right" arrow>
                            <Link to="#" onClick={() => tc.setIsShow(!tc.isShow)}>
                                <Box display="flex" mt={2} alignItems="center" borderLeft="solid 5px" height="45px" borderColor={tc.isShow ? '#11783c' : 'white'}>
                                    <Box bgcolor={tc.isShow ? '#E3EFEB' : 'white'} mx="12px" my={2} border="solid 1px" borderColor="#85A195" borderRadius={3} py={.2} px={1}><Box mt={1}><ToolsCategory fill={tc.isShow ? '#11783c' : '#85A195'}/></Box></Box>
                                    <Box hidden={!tc.isShow} position="fixed" ml="38px" pt={1} color="primary.light" ><ArrowLeftTwoToneIcon style={{fontSize:'50px'}}/></Box>
                                </Box>
                            </Link>
                        </ToolTip>
                    </Box>
                    <Box>
                        <ToolTip title="Refer-user" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} placement="right" arrow>
                            <Link to="/refer-user">
                                <Box my={3} border="solid 1px" borderColor="#85A195" borderRadius={3} py={.2} px={1}><Box mt={1}><ProfileAdd/></Box></Box>
                            </Link>
                        </ToolTip>
                        <ToolTip title="System Updates" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} placement="right" arrow>
                            <Link to="/system-update">
                                <Box my={3} border="solid 1px" borderColor="#85A195" borderRadius={3} py={.2} px={1}><Box mt={1}><ProgArrow/></Box></Box>
                            </Link>
                        </ToolTip>
                        <ToolTip title="App Desktop" TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} placement="right" arrow>
                            <Link to="/app-desktop">
                                <Box my={3} border="solid 1px" borderColor="#85A195" borderRadius={3} py={.2} px={1}><Box mt={1}><ArrowDownLine/></Box></Box>
                            </Link>
                        </ToolTip>
                        
                    </Box>
                </Box>
            </Box>
            <Box className={tc.isShow ? classes.active : classes.notActive} position="fixed" width="270px" height="100vh" bgcolor="#F2F8F6">
                <Box height="85vh" display="flex" flexDirection="column" mt={2}>
                    <Box fontSize={16} mt={4} color="primary.main" ml={4}> <b>Business Tools</b> </Box>
                    <Box fontSize={14}>
                        <Box className={`c-pointer ${classes.btn}`} padding='8px' mt={2} onClick={toggleDrawer(true)} ><Box pl={3} color="#000000">All Categories</Box></Box>
                        <Box className={`c-pointer ${classes.btn}`} padding='8px' ><Box pl={3} color="#000000">New Tool</Box></Box>
                    </Box>
                    <Box component="strong" fontSize={16} my={2} ml={4}>Tool Categories</Box>
                    <Box className={`c-pointer ${classes.btn}`} padding='8px' display="flex" justifyContent="space-between" alignItems="center" color="#000000">
                        <Box fontSize={14} ml={3}>Run My HR & Admin</Box>
                        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#1DF577" color="secondary.light" borderRadius={10} fontSize={12} width="39px" height="24px" mr={2}> New </Box>
                    </Box>
                    <Box className={`c-pointer ${classes.btn}`} padding='8px' display="flex" justifyContent="space-between" alignItems="center">
                        <Box fontSize={14} ml={3} color="#000000">Grow my Business</Box>
                        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#FC006D" color="secondary.light" borderRadius={10} fontSize={12} width="39px" height="24px" mr={2}>Soon</Box>
                    </Box>
                    <Box className={`c-pointer ${classes.btn}`} padding='8px' display="flex" justifyContent="space-between" alignItems="center">
                        <Box fontSize={14} ml={3} color="#000000">Manage your Project</Box>
                        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#FC006D" color="secondary.light" borderRadius={10} fontSize={12} width="39px" height="24px" mr={2}>Soon</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}