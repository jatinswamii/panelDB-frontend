import React from 'react'
import { Box, Grid, Typography, TextField, Container, MenuItem, Button } from '@mui/material';

const Jobinformation = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Box sx={{ width: '60%', maxWidth: 1000, mt: 4, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Job Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Employment Status</Typography>
              <TextField
                size='small'
                select
                fullWidth
                label="Select Employment Status"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Last/Current Designation</Typography>
              <TextField
                size='small'
                fullWidth
                label="Enter Designation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Last/Current office/univ/instit/others</Typography>
              <TextField
                size='small'
                fullWidth
                label="Enter Last/Current office/univ/instit/others"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Department</Typography>
              <TextField
                size='small'
                fullWidth
                label="Enter Department"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Organisation Name</Typography>
              <TextField
                size='small'
                fullWidth
                label="Enter Organisation Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Organisation Type</Typography>
              <TextField
                size='small'
                select
                fullWidth
                label="Select Organisation Type"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} >
              <Typography variant="subtitle1">Address Details</Typography>
            </Grid>
            <Box sx={{ width: '80%', maxWidth: 1000, mt: 4,ml:5, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
<Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              
            <Typography variant="subtitle1">Office Address</Typography>
            <TextField
                size='small'
                fullWidth
                label="Enter Office Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              
            <Typography variant="subtitle1">City</Typography>
            <TextField
                size='small'
                select
                fullWidth
                label="Select City"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              
            <Typography variant="subtitle1">State</Typography>
            <TextField
                size='small'
                select
                fullWidth
                label="Select State"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              
              <Typography variant="subtitle1">Zone</Typography>
              <TextField
                  size='small'
                  select
                  fullWidth
                  label="Select Zone"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              
              <Typography variant="subtitle1">Pin Code</Typography>
              <TextField
                  size='small'
                 
                  fullWidth
                  label="Enter Pin Code"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              
              <Typography variant="subtitle1">Phone No.</Typography>
              <TextField
                  size='small'
              
                  fullWidth
                  label="Enter Phone No."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              
              <Typography variant="subtitle1">Fax</Typography>
              <TextField
                  size='small'
              
                  fullWidth
                  label="Enter Fax"
                  variant="outlined"
                />
              </Grid>
              </Grid>
              </Box>
              <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Advisor Service Name</Typography>
              <TextField
                size='small'
               select
                fullWidth
                label="Select Service"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Pay Scale(Rs.)</Typography>
              <TextField
                size='small'
               select
                fullWidth
                label="Select Pay Scale"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Management Level</Typography>
              <TextField
                size='small'
               select
                fullWidth
                label="Select Management Level"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Particulars of assignment taken after retirements</Typography>
              <TextField
                size='small'
               
                fullWidth
                label="Enter Assignment"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Avg salary if self employed (Rs.)</Typography>
              <TextField
                size='small'
               
                fullWidth
                label="Enter Average Salary "
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  )
}

export default Jobinformation
