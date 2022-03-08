// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { ScrollTop } from '../../../core/global/ScrollTop';
import { useState } from 'react'
import { Toolbar, Box, AppBar } from '@mui/material';
import { env, psl, biz, pm } from '../../../core/Env';
import { Switching } from '../switching/Index';
import { globalrqx } from '../../../core/request/API';

const __SESSION = JSON.parse(localStorage.getItem('mc_tool_session'))

export const Top = () => {
    const [switchForm, setSwitchForm] = useState({stat: false, platform: null, links: null});

    const redirect = async (name) => {
        if (__SESSION !== null) {
            if (name === 'psl') {
                if (__SESSION.ainfo.account_type !== 2) {
                    window.location.href = `${psl(env(), 'url')}/sso/account/auth?ainfo=${encodeURI(JSON.stringify(__SESSION.ainfo))}`
                } else {
                    let rqx = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'prod'}/account/getlinkaccount`, '', {aid: __SESSION.ainfo.aid, mode: 'linkaccount'})
                    if (rqx.length > 0) {
                        let ainfo = {
                            aid: window.btoa(`account_${rqx[0].id}`),
                            email: rqx[0].email,
                            mobile_num: rqx[0].mobile_num,
                            account_type: rqx[0].account_type,
                            username: rqx[0].username
                        }
                        window.location.href = `${psl(env(), 'url')}/sso/account/auth?ainfo=${encodeURI(JSON.stringify(ainfo))}`
                    } else {
                        setSwitchForm({...switchForm, stat: true, platform: 'psl'})
                    }
                }
            } else {
                if (__SESSION.ainfo.account_type === 2) {
                    window.location.href = `${biz(env(), 'url')}/sso/account/auth?ainfo=${encodeURI(JSON.stringify(__SESSION.ainfo))}`
                } else {
                    let rqx = await globalrqx('GET', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'prod'}/account/getlinkaccount`, '', {aid: __SESSION.ainfo.aid})
                    console.log(rqx);
                    setSwitchForm({...switchForm, stat: true, platform: 'biz', links: rqx})
                }
            }
        } else {
            const url = pm(env(), 'url')
            window.location.href = `${url}/sso/rqx?from=MC_SSO_RQX&callback=${env()==='dev'?'development':env()}&platform=${name==='psl'?'personal':'business'}`
        }
    }

    return (
        <Box width="100%">
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <Box className="c-pointer" display="flex" justifyContent="flex-end" alignItems="center" width="100%" fontSize={16}>
                        <Box onClick={()=>redirect('psl')} mr={3}>My Personal</Box>
                        <Box onClick={()=>redirect('biz')} >My Business</Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {
                __SESSION !== null && (
                    <Switching switchForm={switchForm} setSwitchForm={setSwitchForm} />
                )
            }
            {/* <Toolbar id="back-to-top-anchor" />
            <ScrollTop>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> */}
        </Box>
    );
}
