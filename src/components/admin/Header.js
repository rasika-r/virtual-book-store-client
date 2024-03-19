import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { AddCircleOutline, Edit, ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useNavigate, useHistory } from 'react-router-dom';
import { replace } from 'stylis';





const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication state (e.g., remove tokens from localStorage or sessionStorage)
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        
        navigate('/adminLogin',{replace :true});
      };
    return (
        <div>
            <AppBar position="static" sx={{ mb: 2, backgroundImage: 'linear-gradient(to right, #211951, #00D59D)' }}>
                <Toolbar>
                    <Link to='/admin' underline="none" style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" fontFamily="Poppins" color='white' >NovelNook@Admin</Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to='/CreateBooks'>
                        <Tooltip title="Create Books">
                            <IconButton sx={{ color: '#fff' }}>
                                <AddCircleOutline />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link to='/UpdateBooks'>
                        <Tooltip title="Update Books">
                            <IconButton sx={{ color: '#fff' }} >
                                <Edit />
                            </IconButton>
                        </Tooltip>
                    </Link>

                        <Tooltip title="Logout">
                            <IconButton sx={{ color: '#fff' }} onClick={handleLogout}>
                                <ExitToApp />
                            </IconButton>
                        </Tooltip>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;