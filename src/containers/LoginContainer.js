import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { InputAdornment,Input,InputLabel } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Image from '../img/main.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  
}));


const paperStyle={padding :20,height:'70vh',width:350, margin:"80px auto"
,backgroundImage: `url(${Image})`}
const avatarStyle={margin: '20px 0',backgroundColor:'#D35400', width:60,
height:60}
const btnstyle={margin:'30px 0'}
const mystyle = {
  color: "black",
  padding: "10px",
  fontFamily: "Arial"
};

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.username,
      password: this.password,
    };
    
    axios
      .post("https://smpnapi.herokuapp.com/token-auth/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("roleuser", res.data.user.user_permissions);
        localStorage.setItem("nama",res.data.user.username);
        this.setState({
          loggedin: true,
        });
        window.location.reload(); // BUAT REFRESH PAGE
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/Logging" />;
    }
    return (
      
      <Grid>
        <Paper elevation={15} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle} className={useStyles.large}><AccountCircle/></Avatar>
                <h2 style={mystyle}>Sign In</h2>
                </Grid>
                <br></br>
                <form className={useStyles.margin} onSubmit={this.handleSubmit}>
                <InputLabel  htmlFor="input-with-icon-adornment" >
                <h6>username</h6></InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                <InputAdornment position="start">
                <AccountCircle/>
                </InputAdornment>
                }
                autoComplete="username"
                id="username"
                autoFocus
                label='Username' 
                name="username"
		            placeholder='Enter username' 
		            fullWidth required
                onChange={(e) => (this.username = e.target.value)}/>

                <br></br><br></br>
               < InputLabel htmlFor="input-with-icon-adornment">
               <h6> Password</h6></InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                <InputAdornment position="start">
                <LockIcon/>
                </InputAdornment>
                }
                 id='password'
                 label='Password'
		             placeholder='Enter password' 
              	 type='password' 
                 fullWidth 
                 autoComplete="current-password"
                 onChange={(e) => (this.password = e.target.value)}
		             required
                 />
                <br></br><br></br>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            
          </form>
        
        </Paper>
      </Grid>
    );
  }
}
