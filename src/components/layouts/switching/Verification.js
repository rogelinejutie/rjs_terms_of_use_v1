import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material"
import { SnakeLoader } from "../../../core/loader/SnakeLoader";
import { env, biz } from "../../../core/Env";
import { globalrqx } from "../../../core/request/API";
// import { validateAccount } from "../../../../core/validator/Validator";
import OTP from 'react-otp-input';
import BizLogo from '../../../assets/images/logos/biz_logo.png'

const __SESSION = JSON.parse(localStorage.getItem('mc_tool_session'))

export const Verification = ({ classes, opt1form, setOpt1form, q }) => {
    let time = 360
    const [resend, setResend] = useState(360)
    const [resendStat, setResendStat] = useState({value: 0, msg: 'Resend code'})

    useEffect(() => {
        if (resendStat.value === 0) {
            setResendStat({...resendStat, value: 1, msg: ''})
            cd()
        }

        let otpkey = document.getElementsByClassName('otp-inputs')
        for (var i=0; i < otpkey.length; i++) {
            otpkey[i].onkeypress = function(e){
                if (e.key === 'Enter') {
                    verifyHandler()
                }
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [opt1form.valid_otp]);

    const cd = () => {
        let countdown = setInterval(() => {
            time--
            setResend(time)
            if (time <= 0) {
                setResendStat({...resendStat, value: 2, msg: 'Resend code'})
                clearInterval(countdown)
            }
        }, 1000);
    }
    
    // const enterHandler = (event) => { return event.key === 'Enter' ? verifyHandler() : ''}
    const verifyHandler = async () => {
        if (opt1form.step!=='10' && opt1form.step!=='20') {
            let inputs = {...opt1form.inputs}
            // const v = validateAccount(inputs.account.value)
            setTimeout(async () => {
                if (inputs.otp.value === opt1form.valid_otp) {
                    inputs = {...inputs, otp: {...inputs.otp, stat: false, msg: ''}}
                    setOpt1form({...opt1form, step: '2', inputs: inputs})

                    let form = {
                        email: inputs.account.value,
                        aid: __SESSION.ainfo.aid,
                        account_type: 1
                    }
                    let rqx = await globalrqx('POST', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'api'}/account/updateaccount`, form)
                    if (rqx.msg === 'success') {
                        window.location.href = `${biz(env(), 'url')}/sso/account/auth?ainfo=${encodeURI(JSON.stringify(rqx.data))}`
                    }
                } else {
                    inputs = {...inputs, otp: {...inputs.otp, stat: true, msg: 'OTP Code is incorrect'}}
                    setOpt1form({...opt1form, step: '2', inputs: inputs})
                }
            }, 800);
        }
    }

    const resendCodeHandler = async () => {
        let inputs = {...opt1form.inputs}
        setResendStat({...resendStat, msg: 'Sending. . .'})
        let rqx = await globalrqx('POST', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'api'}/account/createaccount`, {email: inputs.account.value, account_type: 1})
        if (rqx.msg === 'delivered') {
            time = 180
            inputs = {...inputs, account: {...inputs.account, stat: false, msg: ''}}
            setResend(180)
            setOpt1form({...opt1form, valid_otp: rqx.vc, step: '2', inputs: inputs})
            setResendStat({...resendStat, value: 1, msg: ''})
            cd()
        }
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" pb={5} pt={3}>
                <Box className="personal-logo-px-1" sx={{backgroundImage: `url(${BizLogo})`}} />
                <Box fontSize={24} ml={1.5}>POF<b>Business</b></Box>
            </Box>
            <Box width="100%">
                <Box textAlign="center" justifyContent="center" mb={3} mx={1}>a verification code has been sent to your email account.</Box>
                <Box pb={2} display="flex" flexDirection="column" justifyContent="center">
                    <OTP
                        inputStyle={`otp-sm-inputs ${opt1form.inputs.otp.stat?'bg-otp-mismatched':'bg-sm-biz'}`}
                        value={opt1form.inputs.otp.value}
                        onChange={(e)=>setOpt1form({...opt1form, inputs: {...opt1form.inputs, otp: {stat: false, msg: '', value: e}}})}
                        isInputNum={true}
                        numInputs={6}
                    />
                    <Box color="error.main" fontSize={13} textAlign="center"><b>{opt1form.inputs.otp.msg}</b></Box>
                </Box>
                <Button variant="contained" className={`${classes.button} ${classes.bgpalette}`} fullWidth onClick={verifyHandler}>
                    {
                        opt1form.step==='2'?(
                            <Box display="flex" alignItems="center">Verify now</Box>
                        ) : (
                            <Box display="flex" alignItems="center" p={1}> <SnakeLoader bg="#ffffff" size="0.75rem" distance={10} /> </Box>
                        )
                    }
                </Button>
                <Box textAlign="center" pb={4} fontSize={13} mt={3}>
                    <Box textAlign="center" pr={0.5}>Didn't receive the verification code?</Box>
                    {
                        resendStat.value!==2 ? (
                            <Box color="primary.main"><b>Resend code after {resend} sec.</b></Box>
                        ) : (
                            <Box color="primary.main" onClick={resendCodeHandler} className="c-pointer"><b>{resendStat.msg}</b></Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}