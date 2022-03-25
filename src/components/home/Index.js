import * as React from 'react';
import { useState } from 'react';
import Logo from '../../assets/images/terms/logo.png';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Terms from './contexts/Function';
import Data from  './contexts/Context';

export const Home = () => {
  const [active, setActive] = useState("Terms");
  const useStyles = makeStyles({
    root: {
      color: '#A9A9A9',
      '&:hover, &:focus': {
        //textDecorationLine: 'underline',
        color: '#0070ef',
        backgroundColor: 'white',
    }},
    text: {
      '&:hover, &:focus': {
        fontWeight: 'bold',
    }},
  });
  const classes = useStyles();

  return ( 
    <Box>
        <Box sx={{ width: '80%', height: '75%', pl: 12, pt: 4, pb: 3, mt: 0.50, margin: "auto", mb: 0.3, bgcolor: "white", color: "black"}} justify="center">
          <Typography sx={{ fontFamily: 'Poppins-Medium' }} variant="h5"><img src={Logo} alt="load" width="44"/><b>POF</b>SIS</Typography><br/>
          <Button className={classes.root} onClick={() => setActive("Terms")}>    
            <Typography className={classes.text} sx={{ fontFamily: 'Poppins-Medium', fontSize: 17, mr: 5 }}>Terms & Conditions</Typography>
          </Button >
          <Button className={classes.root} onClick={() => setActive("Policy")}>    
            <Typography className={classes.text} sx={{ fontFamily: 'Poppins-Medium', fontSize: 17, mr: 5 }}>Data Privacy Policy</Typography>
          </Button >
          <Button className={classes.root} onClick={() => setActive("Cookies")}>    
            <Typography className={classes.text} sx={{ fontFamily: 'Poppins-Medium', fontSize: 17, mr: 5 }}>Cookies Policy</Typography>
          </Button>
        </Box>
        <Box bgcolor= "white" sx={{ width: '80%', pl: 12, pt: 6, pb: 4, pr:12, margin: "auto", bgcolor: "white", color: "black" }}>
          {active === "Terms" && <Terms data={Data} index={0}/>}
          {active === "Policy" && <Terms data={Data} index={1}/> }
          {active === "Cookies" && <Terms data={Data} index={2}/>}
        </Box>
      </Box>
    );
  }