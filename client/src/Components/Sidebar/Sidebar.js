import React from 'react'
import SideNav, { NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sid1'>
    <SideNav className="sid2"
       onSelect={(selected) => {
       console.log(selected);
        }}
        >
        <SideNav.Toggle />
         <SideNav.Nav defaultSelected="home">

         <NavItem className="sitt">
         <NavIcon>
         <Link to="./NewSMS">
              <i className="fa-sharp fa-solid fa-plus  sharp" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText> <Link to="./NewSMS">New SMS</Link></NavText>
        </NavItem>
        
         <NavItem>
         <NavIcon>
         <Link to="./">
              <i className="fa fa-fw fa-home" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText> <Link to="./">Dashboard</Link></NavText>
        </NavItem>

        <NavItem>
        <NavIcon>
        <Link to="./Campaign1">
              <i className="fa fa-fw fa-bullhorn" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText><Link to="./Campaign1">Campaign</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="./TUC">
              <i className="fa fa-fw fa-user" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText><Link to="./TUC">User Management</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="./UserwiseAllocation">
              <i className="fa fa-fw fa-bolt" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText> <Link to="./UserwiseAllocation">Credits</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="/MIS">
         <img  style={{width:"1.5rem",marginBottom:"10px"}} src='/Images/activity.svg'alt='wel'/>
              </Link>
         </NavIcon>
         <NavText><Link to="/MIS">Reports</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
          <Link to="/PartnerSummary">
              <i className="fa fa-fw fa-arrow-trend-up" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText><Link to="/PartnerSummary">Telco Reports</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="/Entity">
              <i className="fa fa-fw fa-gear" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText><Link to="/Entity">DLT</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="./Api">
              <i className="fa fa-fw fa-cloud-arrow-up" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText> <Link to="./Api">API</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="./Groups">
              <i className="fa fa-fw fa-book" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText><Link to="./Groups">Phonebook</Link></NavText>
        </NavItem>

        <NavItem>
         <NavIcon>
         <Link to="./Notification">
              <i className="fa fa-fw fa-bell" style={{fontSize:"1.5em"}}></i>
              </Link>
         </NavIcon>
         <NavText> <Link to="./Notification">Notification</Link></NavText>
        </NavItem>
        
      </SideNav.Nav>
     </SideNav>
    </div>
  )
}

export default Sidebar;