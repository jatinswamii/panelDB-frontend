import React from 'react'
import { Box, Grid, Typography, TextField, Container, MenuItem, Button } from '@mui/material';
import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Educationqualification = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Box sx={{ width: '60%', maxWidth: 1000,mt:4, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Education Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Degree</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select degree"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Passing Year</Typography>
              <div style={{ display: 'flex', gap: '5px' }}>
                <TextField
                  size='small'
                  fullWidth
                  label="Please Enter Passing Year"
                  variant="outlined"
                  placeholder="Please Enter Passing Year"
                />
                <Button variant="contained">Add</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">University</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select University"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Other</Typography>
                <TextField
                  size='small'
                  fullWidth
                  label="Please enter university/institution"
                  variant="outlined"
                  placeholder="Please enter university/institution"
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Subject Major/ Subsidiary</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select Major"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Field Of Specialisation</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select Field Of Specialisation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Profession</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select Profession"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Specialisation</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select Specialisation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Super Specialisation</Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select Super Specialisation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Upload Documents</Typography>
              <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ ml: 2, width: '50%' }}
                >
                  Upload
                  <VisuallyHiddenInput type="file" />
                </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  );
}

export default Educationqualification;