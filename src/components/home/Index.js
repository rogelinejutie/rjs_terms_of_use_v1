import * as React from 'react';
import {useState} from 'react';
import Logo from '../../assets/images/logos/logo_v2.png';
import { Box, Grid, Menu, MenuItem, Button, Typography } from '@mui/material';
import Terms from './contexts/Terms';
import Data from  './contexts/Context'

import '../../assets/bootstrap/css/bootstrap.css';

export const Home = () => {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setActive("Terms");
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
        setActive("Policy");
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
        setActive("Cookies");
    };
    const handleClose3 = () => {
      setAnchorEl3(null);
    };
    const [active, setActive] = useState("Terms");
    
    return (
      <Grid container spacing={3}>
        
          <Grid item s={6}>  
            <Box bgcolor={"#FFFFFF"} sx={{ borderRadius: 1, boxShadow: 1}}>
              <div className="text-center p-3"><img src={Logo} alt="load" width="50"/></div><br/>
              <Button justifyContent="flex-end" id="basic-button d-flex" aria-controls={open ? 'terms' : undefined} aria-haspopup="true" aria-expanded={open ? 'false' : undefined} onClick={handleClick}>
                Terms and Conditions
              </Button>
              <Menu id="terms" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <MenuItem>The Service We Provided</MenuItem>
                <MenuItem>General Use of Services and/or Access of Platform</MenuItem>
                <MenuItem>Use of Services</MenuItem>
                <MenuItem>Costumers with Accounts</MenuItem>
                <MenuItem>Intellectual Property</MenuItem>
                <MenuItem>Our Limitation of Responsibility and Liability</MenuItem>
                <MenuItem>Hyperlinks and Alerts</MenuItem>
                <MenuItem>Your Submissions and Information</MenuItem>
                <MenuItem>Termination</MenuItem>
                <MenuItem>Notices</MenuItem>
                <MenuItem>General</MenuItem>
                <MenuItem>Voucher Terms and Conditions</MenuItem>
              </Menu><br/>
              <Button id="data policy" aria-controls={open2 ? 'data policy' : undefined} aria-haspopup="true" aria-expanded={open2 ? 'false' : undefined} onClick={handleClick2}>
                Data Policy
              </Button>
              <Menu id="data policy" anchorEl={anchorEl2} open={open2} onClose={handleClose2} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <MenuItem>What You Need to Know </MenuItem>
                <MenuItem>The Personal Data We Collect from You</MenuItem>
                <MenuItem>Use and Disclosure of Personal Data</MenuItem>
                <MenuItem>Rights of User</MenuItem>
                <MenuItem>Updating Your Personal Data</MenuItem>
                <MenuItem>Accessing Your Personal Data</MenuItem>
                <MenuItem>Securing of Your Personal Data</MenuItem>
                <MenuItem>Retention of Personal Data</MenuItem>
                <MenuItem>Minors</MenuItem>
                <MenuItem>Collection of Computer Data</MenuItem>
                <MenuItem>POFSIS Right to Disclose Personal Data</MenuItem>
                <MenuItem>Third Party Sites</MenuItem>
                <MenuItem>How do the tools powered by POFSIS work together?</MenuItem>
                <MenuItem>Questions, Feedback, Concerns, Suggestions or Complaints</MenuItem>
              </Menu><br/>
              <Button id="basic-button" aria-controls={open3 ? 'cookies policy' : undefined} aria-haspopup="true" aria-expanded={open3 ? 'false' : undefined} onClick={handleClick3}>
                Cookies Policy
              </Button>
              <Menu id="cookies " anchorEl={anchorEl3} open={open3} onClose={handleClose3} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <MenuItem>What are Cookies</MenuItem>
                <MenuItem>How We Use Cookies</MenuItem>
                <MenuItem>Disabling Cookies</MenuItem>
                <MenuItem>The Cookies We Set</MenuItem>
                <MenuItem>Third Party Cookies</MenuItem>
                <MenuItem>More Information</MenuItem>
              </Menu><br/><br/>
              <Typography variant="subtitle1" align="justify">v1.0.1 - Version dated June 02, 2020</Typography>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box bgcolor={"#FFFFFF"} sx={{ p: 2, borderRadius: 1, boxShadow: 1 }}>
              {active === "Terms" && <Terms data={Data} index={0}/>}
              {active === "Policy" && <Terms data={Data} index={1}/> }
              {active === "Cookies" && <Terms data={Data} index={2}/>}
            </Box><br/><br/>
            
          </Grid>
        
      </Grid>
    );
  }