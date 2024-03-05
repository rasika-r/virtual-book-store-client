import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';


const UpdateBookModal = ({ open, handleClose, selectedBook }) => {
    const [formData, setFormData] = useState(selectedBook || {});

    // Update formData with selectedBook data when it changes
    useEffect(() => {
        setFormData(selectedBook || {});
    }, [selectedBook]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Extract book_id from selectedBook
        const { book_id } = selectedBook;
        // Send PATCH request with updated data
        axios.patch(`http://localhost:8000/admin/books/${book_id}`, formData)
            .then((response) => {
                console.log('Book updated successfully:', response.data);
                handleClose(); // Close the modal after successful update
            })
            .catch((error) => {
                console.error('Error updating book:', error);
            });
    };
    

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 600, // Increased width
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant='h6' mb={3} fontSize='30px' fontWeight='600' sx={{ color: '#211951' }}>Update Book</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField name="book_name" label="Book Name" variant="outlined" fullWidth value={formData.book_name} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="author_name" label="Author Name" variant="outlined" fullWidth value={formData.author_name} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="img" label="Image URL" variant="outlined" fullWidth value={formData.img} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="pdf_url" label="PDF URL" variant="outlined" fullWidth value={formData.pdf_url} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="genre" label="Genre" variant="outlined" fullWidth value={formData.genre} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="rent_amount" label="Rent Amount" variant="outlined" fullWidth value={formData.rent_amount} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="purchase_amount" label="Purchase Amount" variant="outlined" fullWidth value={formData.purchase_amount} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="pages" label="Total Pages" variant="outlined" fullWidth value={formData.pages} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="ratings" label="Ratings" variant="outlined" fullWidth value={formData.ratings} onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="book_desc" label="Book Description" variant="outlined" multiline rows={4} fullWidth value={formData.book_desc} onChange={handleInputChange} />
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{mt:1}} >Save</Button>
                </Grid>

            </Box>
        </Modal>
    );
}

export default UpdateBookModal;
