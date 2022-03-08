import { Box, Backdrop, Modal, Fade, Grid, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { env, biz } from '../../../core/Env';
import { Options } from './Options';
import { Auth } from './Auth';
import { Verification } from './Verification';
import LimitText from "react-show-more-text"
import { useState } from 'react';
import IPofsis from '../../../assets/images/core/error_bot.jpg'

const __SESSION = JSON.parse(localStorage.getItem('mc_tool_session'))

export const Switching = ({switchForm, setSwitchForm}) => {
    const [opt1form, setOpt1form] = useState({ stat: false, step: '1', valid_otp: '', inputs: {account:{value: '', stat: false, msg: ''}, otp:{value: '', stat: false, msg: '', toggle: false}} });
    const useStyles = makeStyles((theme) => ({
        btnHover: {
            '&:hover': {
                backgroundColor: '#EDEDED',
            },
        },
        button: {
            textTransform: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            boxShadow: '0 0.1rem 0.3rem rgba(0, 0, 0, .15)'
        },
        tf: {
            fontSize: '10px',
            '& label.Mui-focused': {
                color: theme.palette.primary.business
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.business
                },
            }
        },
        bgpalette: {
            backgroundColor: theme.palette.primary.business
        }
    }));
    const classes = useStyles();
    const handleClose = () =>{
        setSwitchForm({...switchForm, stat: false})
    }

    const redirectHandler = (type) => {
        let aid = __SESSION.ainfo.aid;
        let email = window.btoa(__SESSION.ainfo.email);
        if (type === 'op1') {
            if (__SESSION.ainfo.email !== null) {
                let reg = {
                    va: 'email',
                    acc: email,
                }
                window.location.href = `https://dev-sls-pofsis.pofsis.com/${switchForm.platform}/account/sync?reg=${encodeURIComponent(JSON.stringify(reg))}&step=2`
            } else {
                setOpt1form({...opt1form, stat: true})
            }
        }else if(type === 'op2'){
            window.location.href = `https://dev-sls-pofsis.pofsis.com/${switchForm.platform}/account/link?parent_id=${aid}`
        }else{
            window.location.href = `https://dev-sls-pofsis.pofsis.com/${switchForm.platform}/registration?parent_id=${aid}`
        }
    }

    const linkedSwitchHandler = (sf) => {
        let ainfo = {
            aid: sf.id,
            email: sf.email,
            mobile_num: sf.mobile_num,
            account_type: sf.account_type,
            username: sf.username
        }
        window.location.href = `${biz(env(), 'url')}/sso/account/auth?ainfo=${encodeURI(JSON.stringify(ainfo))}`
    }

    return ( 
        <Modal
            open={switchForm.stat}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={switchForm.stat}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Box position="absolute" width={884} minHeight={600} bgcolor="#ffffff" borderRadius="15px" p={2}>
                        <Grid container spacing={3}>
                            {
                                (switchForm.platform === 'biz' && switchForm.links !== null && switchForm.links.length > 0) && (
                                    switchForm.links.length > 0 && (
                                        <Grid item xs={12}>
                                            <Box>
                                                <Box mb={2}>Linked accounts:</Box>
                                                <Grid container spacing={3}>
                                                    {
                                                        switchForm.links.map((sf, k) => (
                                                            <Grid item xs={4} key={k}>
                                                                {
                                                                    sf.company_name === '' ? (
                                                                        <Box display="flex" alignItems="center" width="100%" p={1} borderRadius={4} bgcolor="primary.light" onClick={()=>linkedSwitchHandler(sf)}>
                                                                            <Box mr={1} className="personal-logo-xs personal-logo-flat-top" style={{backgroundImage: `url(${JSON.parse(sf.profile_logo).profile})`, minWidth: '3rem'}} borderRadius={4} />
                                                                            <Box fontSize={13}>
                                                                                <Box><b><LimitText lines={1} more="" less="" expanded={false} truncatedEndingComponent={"... "} className="text-justify">{sf.email}</LimitText></b></Box>
                                                                                <Box>No company yet.</Box>
                                                                            </Box>
                                                                        </Box>
                                                                    ) : (
                                                                        <Box display="flex" alignItems="center" width="100%" p={1} borderRadius={4} bgcolor="primary.light" onClick={()=>linkedSwitchHandler(sf)}>
                                                                            <Box mr={1} className="personal-logo-xs personal-logo-flat-top" style={{backgroundImage: `url(${sf.company_logo !== null ? JSON.parse(sf.company_logo).file_content : IPofsis})`, minWidth: '3rem'}} borderRadius={4} />
                                                                            <Box fontSize={13}>
                                                                                
                                                                                <Box><b><LimitText lines={1} more="" less="" expanded={false} truncatedEndingComponent={"... "} className="text-justify">{sf.company_name}</LimitText></b></Box>
                                                                                
                                                                                <Box><LimitText lines={1} more="" less="" expanded={false} truncatedEndingComponent={"... "} className="text-justify">{sf.company_email}</LimitText></Box>
                                                                            </Box>
                                                                        </Box>
                                                                    )
                                                                }
                                                            </Grid>
                                                        ))
                                                    }
                                                </Grid>
                                                <Box mt={2}><Divider /></Box>
                                            </Box>
                                        </Grid>
                                    )
                                )
                            }
                            <Grid item xs={6}>
                                <Box minHeight={600} height="100%" width="100%" sx={{backgroundImage:`url('https://pofsis-business.s3.amazonaws.com/biz-image/1641974822275.png')`, backgroundSize:"cover", backgroundPosition:"30% 70%", backgroundRepeat:'no-repeat', height:'100%', borderRadius:'15px 0px 0px 15px'}}></Box>
                            </Grid>
                            {
                                opt1form.stat ? (
                                    <Grid item xs={6}>
                                        {
                                            (opt1form.step==='10' || opt1form.step==='1') ? (
                                                <Auth classes={classes} opt1form={opt1form} setOpt1form={setOpt1form} />
                                            ) : (
                                                <Verification classes={classes} opt1form={opt1form} setOpt1form={setOpt1form} />
                                            )
                                        }
                                    </Grid>
                                ) : (
                                    <Options __SESSION={__SESSION} switchForm={switchForm} setSwitchForm={setSwitchForm} classes={classes} redirectHandler={redirectHandler} />
                                )
                            }
                        </Grid>   
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}