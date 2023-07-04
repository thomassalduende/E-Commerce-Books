import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { AiOutlineLogin } from 'react-icons/ai'
import Tooltip from '@mui/material/Tooltip';
import { FaUserAlt, FaUser } from "react-icons/fa";
import {userContext} from '../../Context/user'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export function MaterialDesign() {

  const { removeAuth } = useContext(userContext)
  const Navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCerrarSesion = () => {
    removeAuth()
    Navigate('/')
  };

  return (
    <>
      <Tooltip title="Cerrar sesión">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <FaUserAlt alt="Remy Sharp" src=""/>
        </IconButton>
      </Tooltip>
      <Menu style={{backgroundColor: 'transparent', marginLeft: '15px'}}
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        
        <a href="/user"><button style={{display: 'grid', background: 'transparent', border: 'none'}}><FaUser size="32px" /></button></a>
        <button style={{display: 'grid',  marginTop: '10px', background: 'transparent', border: 'none'}} onClick={handleCerrarSesion}><AiOutlineLogin size="35px" /></button>
      </Menu>
 
    </>
  );
}