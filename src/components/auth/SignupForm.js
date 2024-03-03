import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';



const SignUpForm = () => {
    const [showOTPField, setShowOTPField] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Get OTP');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleGetOTP = () => {
        setShowOTPField(true);
        setButtonLabel('Verify OTP');
    };


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                ml: 6,
                mt: 15,
                width: '80%',
                height: '40%',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '52px',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                }}
            >
                Sign Up
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <TextField
                    {...register('name', {
                        required: 'Name is required',
                    })}
                    variant="outlined"
                    fullWidth
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    sx={{ marginBottom: '20px' }}
                />

                <TextField
                    {...register('username', {
                        required: 'Username is required',
                    })}
                    variant="outlined"
                    fullWidth
                    label="Username"
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ''}
                    sx={{ marginBottom: '20px' }}
                />

                <TextField
                    {...register('mobileNumber', {
                        required: 'Mobile number is required',
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Invalid mobile number',
                        },
                    })}
                    variant="outlined"
                    fullWidth
                    label="Mobile number"
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber ? errors.mobileNumber.message : ''}
                    sx={{ marginBottom: '20px' }}
                />

                {showOTPField && (
                    <TextField
                        {...register('otp', {
                            required: 'Please enter OTP',
                            pattern: {
                                value: /^\d{6}$/,
                                message: 'OTP should be 6 digits',
                            },
                        })}
                        variant="outlined"
                        fullWidth
                        label="Enter OTP"
                        error={!!errors.otp}
                        helperText={errors.otp ? errors.otp.message : ''}
                        sx={{ marginBottom: '20px' }}
                    />
                )}

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        color: '#000000',
                        ml: 13
                    }}
                >
                    Already have an account?{' '}
                    <Link to="/" underline="none" sx={{ color: '#7C5DFA', fontWeight: 'bold', textAlign: 'center', }} style={{ textDecoration: 'none' }}>
                        Log in
                    </Link>

                </Typography>

                <Button
                    type="button"
                    variant="contained"
                    sx={{
                        ml: 14,
                        backgroundColor: '#15F5BA',
                        width: '60%',
                        height: '20%',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#0c9e87',
                        },
                    }}
                    onClick={showOTPField ? handleSubmit(onSubmit) : handleGetOTP}
                >
                    {buttonLabel}
                </Button>
            </form>
        </Box>
    );
};

export default SignUpForm;
