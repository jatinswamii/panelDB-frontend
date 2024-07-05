import React from 'react'
import { Container, Box, Typography, Grid ,TextField,Button,MenuItem} from '@mui/material'
import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const Achievements = () => {
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
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ width: '60%', maxWidth: 1000, mt: 4, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Achievements </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Typography variant="subtitle1">Current Membership of Professional Bodies and Awards won (If any)</Typography>
              <Box sx={{ width: '80%', maxWidth: 1000, mt: 4, ml: 5, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
                <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Level of Award/Certifications</Typography>
              <TextField
                size='small'
               select
                fullWidth
                label="Select Level "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">National Award</Typography>
              <TextField
                size='small'
             
                fullWidth
                label="Enter National Award "
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">International Award</Typography>
              <TextField
                size='small'
         
                fullWidth
                label="Enter International Award"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Documents</Typography>
              <Box display="flex" alignItems="center">
                <TextField
                  size='small'
                  fullWidth
       
                  label="Enter Document Details "
                  variant="outlined"

                >
                
                </TextField>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ ml: 2, width: '65%' }}
                >
                  Upload
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              </Grid>
            </Grid>
              </Box>
            </Grid>
          </Grid>

        </Box>
      </Box>

    </Container>
  )
}

export default Achievements
