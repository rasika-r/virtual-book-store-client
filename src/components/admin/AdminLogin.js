import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography } from '@mui/material';
import BookCover from '../../Assets/images/Book cover 1.png'
import AdminLoginForm from './AdminLoginForm';



const Item = styled(Paper)(({ theme }) => ({
    borderRadius: 0,
    boxShadow: 'none',
    height: '100vh',
    overflowY: 'hidden',
}));
export default function Adminlogin() {

    return (
        <Box sx={{ flexGrow: 1, height: '100vh', display: 'flex' }}>
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid item xs={6}>
                    <Item sx={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(244,238,255,1) 0%, rgba(65,42,116,1) 95%, rgba(50,26,82,1) 100%)'
                    }}>
                        <div>
                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', fontSize: 52, mt: 6, ml: 3, }} />
                            <Typography sx={{ fontSize: 28, fontFamily: 'Poppins', fontWeight: 'bold', ml: 9, mt: -4 }}>There is more treasure in books than in all the pirate’s loot on Treasure Island...</Typography>
                            <Typography sx={{ mt: 2, ml: 9, fontSize: 20, color: '#787878' }}>- Walt Disney</Typography>
                            <img
                                src={BookCover}
                                alt="random image"
                                style={{ width: '100%', borderRadius: '10px', marginTop: -10 }}
                            />
                        </div>
                    </Item>
                </Grid>

                <Grid item xs={6}>
                    <Item><AdminLoginForm /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}