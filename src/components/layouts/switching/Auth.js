// import { useState } from "react";
import { Box } from "@mui/system"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import { ArrowRightAltTwoTone as IArrowRightAlt } from "@mui/icons-material";
// import { useHistory } from 'react-router-dom';
import { SnakeLoader } from "../../../core/loader/SnakeLoader";
import { env } from "../../../core/Env";
import { globalrqx } from "../../../core/request/API";
import { validateAccount } from "../../../core/validator/Validator";
import BizLogo from '../../../assets/images/logos/biz_logo.png'
import IBizEmail from '../../../assets/images/icons/bizemail.png'

export const Auth = ({ classes, opt1form, setOpt1form, q }) => {
    // const [inputs, setInputs] = useState()
    // let history = useHistory()
    
    const inputHandler = (e) => {
        const {name, value} = e.target
        let inputs = {...opt1form.inputs}
        inputs = {...inputs, [name] : {...inputs[name], value: value, stat: false, msg: ''}}

        setOpt1form({...opt1form, inputs: inputs})
    }
    
    const enterHandler = (event) => { return event.key === 'Enter' ? next() : ''}
    const next = async () => {
        if (opt1form.step!=='10' && opt1form.step!=='20') {
            let inputs = {...opt1form.inputs}
            const v = validateAccount(inputs.account.value)
            if (opt1form.step==='1') {
                setOpt1form({...opt1form, step: '10'})
                if (inputs.account.value !== '') {
                    if (v==='email') {
                        let rqx = await globalrqx('POST', `https://tpdjwm06fj.execute-api.ap-southeast-1.amazonaws.com/api/global/rqx/${env()!=='prod'?'sb':'api'}/account/createaccount`, {email: inputs.account.value, account_type: 1})
                        if (rqx.msg === 'delivered') {
                            inputs = {...inputs, account: {...inputs.account, stat: false, msg: ''}}
                            setOpt1form({...opt1form, valid_otp: rqx.vc, step: '2', inputs: inputs})
                        } else if (rqx.msg === 'email exist') {
                            inputs = {...inputs, account: {...inputs.account, stat: true, msg: "Account already exist."}}
                            setOpt1form({...opt1form, step: '1', inputs: inputs})
                        }
                    } else {
                        inputs = {...inputs, account: {...inputs.account, stat: true, msg: "Account format is invalid."}}
                        setOpt1form({...opt1form, step: '1', inputs: inputs})
                    }
                } else {
                    inputs = {...inputs, account: {...inputs.account, stat: true, msg: "Account is required"}}
                    setOpt1form({...opt1form, step: '1', inputs: inputs})
                }
            }
        }
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" pb={5} pt={3}>
                <Box className="personal-logo-px-1" sx={{backgroundImage: `url(${BizLogo})`}} />
                <Box fontSize={24} ml={1.5}>POF<b>Business</b></Box>
            </Box>
            <Box width="100%">
                <Box textAlign="center" justifyContent="center" mb={3} mx={1}>Email address is required to complete this process.</Box>
                <Box pb={2}>
                    <TextField label="email" variant="outlined" name="account" value={opt1form.inputs.account.value} onInput={(e)=>inputHandler(e)} disabled={opt1form.step==='10'?true:false} error={opt1form.inputs.account.stat} fullWidth className={classes.tf} onKeyPress={enterHandler}
                        inputProps={{
                            maxLength: 50
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <img src={IBizEmail} alt="IBizEmail" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: ''
                        }}
                    />
                    <Box color="error.main" fontSize={13}><b>{opt1form.inputs.account.msg}</b></Box>
                </Box>
                <Button variant="contained" className={`${classes.button} ${classes.bgpalette}`} fullWidth onClick={next}>
                    {
                        opt1form.step==='1'?(
                            <Box display="flex" alignItems="center">Next <IArrowRightAlt style={{marginLeft: 10}} /></Box>
                        ) : (
                            <Box display="flex" alignItems="center" p={1}> <SnakeLoader bg="#ffffff" size="0.75rem" distance={10} /> </Box>
                        )
                    }
                </Button>
            </Box>
        </Box>
    )
}