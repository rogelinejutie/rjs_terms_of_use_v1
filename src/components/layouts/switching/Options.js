import { Box, Grid } from '@mui/material';
import { ArrowRight } from '../../../core/global/Icons';

export const Options = ({ __SESSION, switchForm, redirectHandler, classes }) => {
    return (
        <Grid item xs={6} my={2}>
            <Grid item xs={8} container justifyContent="space-between" color="#1B1B1B">
                <Box fontWeight={600} fontSize={16}>{switchForm.platform==='psl'?'POFBusiness':'POFPersonal'}</Box>
                <Box><ArrowRight size={16}/></Box>
                <Box fontWeight={600} fontSize={16}>{switchForm.platform==='psl'?'POFPersonal':'POFBusiness'}</Box>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between" pt={2}>
                <Box fontWeight={600} fontSize={24}>Link Account Options</Box>
            </Grid>
            <Grid item xs={12}>
                <Box fontSize={14} color="#1B1B1B">
                    Link your POFSIS account for easy access and make your
                    POFSIS journey more fun and enjoyable. 
                </Box>
            </Grid>
            <Grid item xs={12} container py={2}>
                <Box fontSize={12} color="#7B7F82">
                    Please select one: 
                </Box>
            </Grid>
            {
                __SESSION.ainfo.account_type === 1 && (
                    <Grid item xs={12} container pb={3}>
                        <Box >
                            <Grid onClick={()=>redirectHandler('op1')} className={`c-pointer shadow-switch ${classes.btnHover}`} item xs={12} container direction="column" borderRadius="15px" fontSize={12} height="94px" width="100%" mr={1}> 
                                <Box width="100%" height="22px" display="flex" justifyContent="flex-end" pr={.1}>
                                    <Box fontSize="12px" bgcolor="#DEEBE3" borderRadius="0px 10px 10px 10px" textAlign="center" width="122px" color="#11783C">Recommended</Box>
                                </Box>
                                <Box width="100%" display="flex">
                                    <Box mx={1.5} width="40px" height="100%" sx={{backgroundImage:`url('https://pofsis-business.s3.amazonaws.com/biz-image/1641979466551.png')`, backgroundSize:"cover", backgroundPosition:"30% 70%", backgroundRepeat:'no-repeat', maxHeight:'32px', maxWidth:'32px', borderRadius:'10px'}}></Box>
                                    <Box color="#1B1B1B" width="100%" >
                                        <Box component="strong" fontSize="16px"> Use My {switchForm.platform==='psl'?'Business':'Personal'} Account</Box>
                                        <Box fontSize="12px" width="100%">
                                            Use your {switchForm.platform==='psl'?'POFBusiness':'POFPersonal'} account <Box component="u" color='#11783C'>{__SESSION.ainfo.email !== null ? __SESSION.ainfo.email : __SESSION.ainfo.mobile_num}</Box> for {switchForm.platform==='psl'?'POFPersonal':'POFBusiness'}.
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                )
            }
            <Grid item xs={12} container pb={3}>
                <Grid onClick={()=>redirectHandler('op2')} className={`c-pointer shadow-switch ${classes.btnHover}`} item xs={12} container direction="column" justifyContent="center" borderRadius="15px" fontSize={12} height="94px" width="100%" mr={1}> 
                    <Box width="100%" display="flex">
                        <Box mx={1.5} width="40px" height="100%" sx={{backgroundImage:`url('https://pofsis-business.s3.amazonaws.com/biz-image/1641979947965.png')`, backgroundSize:"cover", backgroundPosition:"30% 70%", backgroundRepeat:'no-repeat', maxHeight:'32px', maxWidth:'32px', borderRadius:'10px'}}></Box>
                        <Box color="#1B1B1B" width="100%" >
                            <Box component="strong" fontSize="16px"> Link Existing {switchForm.platform==='psl'?'Personal':'Business'} Account</Box>
                            <Box fontSize="12px" width="100%">
                                Link your {switchForm.platform==='psl'?'POFBusiness':'POFPersonal'} to your existing {switchForm.platform==='psl'?'POFPersonal':'POFBusiness'} account.
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} container pb={3}>
                <Grid onClick={()=>redirectHandler('op3')} className={`c-pointer shadow-switch ${classes.btnHover}`} item xs={12} container direction="column" justifyContent="center" borderRadius="15px" fontSize={12} height="94px" width="100%" mr={1}> 
                    <Box width="100%" display="flex">
                        <Box mx={1.5} width="40px" height="100%" sx={{backgroundImage:`url('https://pofsis-business.s3.amazonaws.com/biz-image/1641980045079.png')`, backgroundSize:"cover", backgroundPosition:"30% 70%", backgroundRepeat:'no-repeat', maxHeight:'32px', maxWidth:'32px', borderRadius:'10px'}}></Box>
                        <Box color="#1B1B1B" width="100%" >
                            <Box component="strong" fontSize="16px"> Create New Account</Box>
                            <Box fontSize="12px" width="100%">
                                Create new account for POFPersonal and link to POFBusiness.
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}