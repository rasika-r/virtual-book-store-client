import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { AddCircleOutline, Edit, ExitToApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
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
                    <Link to='/'>
                        <Tooltip title="Logout">
                            <IconButton sx={{ color: '#fff' }}>
                                <ExitToApp />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;