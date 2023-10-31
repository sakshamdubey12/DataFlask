import './sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';
import {
    Link
  } from "react-router-dom";


export default function Sidebar () {

    const userManagementData = [
        {
            id: 1, 
            data: "All Users"

        }, 
        {
            id: 2, 
            data: <Link to="/adduser">Add User</Link>
        },
        {
            id: 3, 
            data: <Link to="/addrole">Add Role</Link>
        },
        {
            id: 4, 
            data: "Add Permission to role"
        },
    ]

    const configurationData = [
        {
            id: 1, 
            data: <Link to="/addintent">Add Intents</Link>
        }, 
        {
            id: 2, 
            data: "Add Utterance"
        },
        {
            id: 3, 
            data: <Link to="/bottraining">Bot Training</Link>
        },
        {
            id: 4, 
            data: "FAQ"
        },
        {
            id: 5, 
            data: "Rules"
        },
    ]

    const integrationData = [
        {
            id: 1, 
            data: "Email"
        }, 
        {
            id: 2, 
            data: "Facebook Messenger"
        },
        {
            id: 3, 
            data: "Integration 03"
        },
        {
            id: 4, 
            data: "WhatsApp"
        },
        {
            id: 5, 
            data: "Twitter"
        },
        {
            id: 6, 
            data: "Facebook Page"
        },
    ]

    const emailData = [
        {
            id: 1, 
            data: "Email Option 01"
        }, 
        {
            id: 2, 
            data: "Email Option 02"
        },
        {
            id: 3, 
            data: "Email Option 03"
        },
        {
            id: 4, 
            data: "Email Option 04"
        },
    ]

    const logData = [
        {
            id: 1, 
            data: "FaceBook Logs"
        }, 
        {
            id: 2, 
            data: "WhatsApp Logs"
        },
        {
            id: 3, 
            data: "Email Logs"
        },
        {
            id: 4, 
            data: "ChatBot Logs"
        },
    ]

    const [openManagement, setOpenManagement] = useState(false); 
    const [openConfiguration, setOpenConfiguration] = useState(false);
    const [openIntegration, setOpenIntegration] = useState(false); 
    const [openEmail, setOpenEmail] = useState(false); 
    const [openLog, setOpenLog] = useState(false); 

    return (
        <div className="sidebar">
            <p className='sidebarTop'>ASK MANTU!</p>
            <div className='sidebarMain'>
                <div className="sidebarAccount">
                    <div>
                        <AccountCircleIcon style={{ fontSize: "100px" }}/>
                    </div>
                    <div style={{ padding: "20px 0 0 0" }}>
                        <p>Welcome,</p>
                        <p style={{
                            color: "var(--primary)", 
                            fontSize: "20px", 
                            fontWeight: "bold"
                        }}>AskMantu Admin</p>
                    </div>
                </div>

                <div className='sidebarGeneral'>

                    <p style={{ fontWeight: "550", color: "var(--primary)" }}>GENERAL</p>

                    <div>
                        <div className='sidebarDropOption' onClick={() => setOpenManagement(!openManagement)}>
                            <EditCalendarIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p> 
                                {/* <Link to='/adduser'> */}
                                 User Management
                                 {/* </Link> */}
                                 </p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        {openManagement && 
                        <div style={{ padding: "10px 10px" }}>
                        {userManagementData.map((data) => (
                            <p key={data.id} style={{ padding: "4px", fontSize: "15px" , paddingLeft:"20px"}}
                            >{data.data}</p>
                        ))}
                        </div>
                        }

                        <div className='sidebarDropOption' onClick={() => setOpenConfiguration(!openConfiguration)}>
                            <DesktopWindowsOutlinedIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Configuration</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        {openConfiguration && 
                        <div style={{ padding: "10px 10px" }}>
                            {configurationData.map((data) => (
                                <p key={data.id} style={{ padding: "4px", fontSize: "15px" , paddingLeft:"20px"}}>{data.data}</p>
                            ))}
                        </div>
                        }

                        <div className='sidebarDropOption' onClick={() => setOpenIntegration(!openIntegration)}>
                            <GroupsIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Integration</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        {openIntegration && 
                        <div style={{ padding: "10px 10px" }}>
                            {integrationData.map((data) => (
                                <p key={data.id}style={{ padding: "4px", fontSize: "15px" , paddingLeft:"20px"}}>{data.data}</p>
                            ))}
                        </div>
                        }

                        <div className='sidebarDropOption' onClick={() => setOpenEmail(!openEmail)}>
                            <EmailIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Email</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        {openEmail && 
                        <div style={{ padding: "10px 10px" }}>
                            {emailData.map((data) => (
                                <p key={data.id} style={{ padding: "4px", fontSize: "15px" , paddingLeft:"20px"}}>{data.data}</p>
                            ))}
                        </div>
                        }

                    </div>
                </div>

                <div className='sidebarGeneral'>

                    <p style={{ fontWeight: "550", color: "var(--primary)" }}>ADVANCED</p>

                    <div>
                        <div className='sidebarDropOption' onClick={() => setOpenLog(!openLog)}>
                            <InfoIcon style={{ fontSize: "35px" }} htmlColor='var(--primary)'/>
                            <p>Logs</p>
                            <ExpandMoreIcon className='dropIcons'/>
                        </div>
                        {openLog && 
                        <div style={{ padding: "10px 10px" }}>
                            {logData.map((data) => (
                                <p key={data.id} style={{ padding: "4px", fontSize: "15px" , paddingLeft:"20px"}}>{data.data}</p>
                            ))}
                        </div>
                        }

                    </div>
                </div>
            </div>

            <div className="sidebarBottom"> 
                <SettingsIcon style={{ fontSize: "30px" }}/>
                <OpenWithIcon style={{ fontSize: "30px" }}/>
                <PowerSettingsNewIcon style={{ fontSize: "30px" }}/><link to=''></link>
            </div>
        </div>
    )
}