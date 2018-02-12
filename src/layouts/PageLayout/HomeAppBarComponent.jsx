import React from 'react';
import { IndexLink, Link } from 'react-router'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import HomeIcon from 'material-ui/svg-icons/action/home';
import StoreIcon from 'material-ui/svg-icons/action/store';
import ContactIcon from 'material-ui/svg-icons/communication/phone';
import AboutIcon from 'material-ui/svg-icons/social/people-outline';
import ProductServicesIcon from 'material-ui/svg-icons/social/domain';
import BlogIcon from 'material-ui/svg-icons/av/web'; 
import {pinkA400,blue50} from 'material-ui/styles/colors';
import Logo from './assets/logo.png';
import {browserHistory} from 'react-router';
const iconStyles = {
  marginRight: 24,
};
const styles={
  homeLogo: {
    'height': '50px'
  }
};
export default class AppBarComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  changeRoute(path){
    browserHistory.push(path)
  }

  handleClickHome() {
    changeRoute('/');
  }
  handleClickServices(){
    changeRoute('/services');
  } 
  handleClickAboutus(){
    changeRoute('/aboutus');
  }
  handleClickContactus() {
    changeRoute('/contactus');
  }
  handleClickStore() {
    changeRoute('/store');
  }
  handleClickBlog() {
    changeRoute('/blog');
  }

  render() {
    return (
      <div>
        <AppBar
            title="Employee Billdesk"
            titleStyle={{"margin":"auto"}}
            iconElementLeft={<img alt='SPH' style={{styles}} className='home-logo' src={Logo} />}          
        />
        
        <Tabs>
            <Tab
              icon={<IndexLink to='/'><HomeIcon color={blue50} hoverColor={pinkA400} /></IndexLink>}
              label="HOME"
              onClick={this.handleClickHome}
            />
          <Tab
            icon={<Link to='/services'><ProductServicesIcon color={blue50} hoverColor={pinkA400} /></Link>}
            label="SERVICES"
            onClick={this.handleClickServices}
          />      
          <Tab
            icon={<Link to='/aboutus'><AboutIcon color={blue50} hoverColor={pinkA400} /></Link>}
            label="ABOUT US"
            onClick={this.handleClickAboutus}
          />
          <Tab
            icon={<Link to='/contactus'><ContactIcon color={blue50} hoverColor={pinkA400} /></Link>} 
            label="CONTACT US"
            onClick={this.handleClickContactus}
          />                
          <Tab
            icon={<Link to='/store'><StoreIcon color={blue50} hoverColor={pinkA400} /></Link>}
            label="STORE"
            onClick={this.handleClickStore}
          />
          <Tab
            icon={<Link to='/blog'><BlogIcon color={blue50} hoverColor={pinkA400} /></Link>}            
            label="BLOG"
            onClick={this.handleClickBlog}
          />
        </Tabs>
        {/* <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="Menu" />
          <MenuItem onClick={this.handleClose}><IndexLink to='/'><HomeIcon />Home</IndexLink></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/counter'><ProductServicesIcon /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/counter'><AboutIcon /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/counter'><ContactIcon /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/counter'><StoreIcon /></Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/counter'><BlogIcon /></Link></MenuItem>
        </Drawer> */}
      </div>
    );
  }
}