import React from 'react';
import { Box, Grid, Typography, TextField, Container, MenuItem } from '@mui/material';

const Address = () => {
  const state = [{ value: 'uttar pradesh', label: 'Uttar Pradesh' }, { value: 'bihar', label: 'Bihar' }, { value: 'delhi', label: 'Delhi' }, { value: 'gujarat', label: 'Gujarat' }];
  const district = [{ value: 'gorakhpur', label: 'Gorakhpur' }, { value: 'patna', label: 'Patna' }, { value: 'lucknow', label: 'Lucknow' }, { value: 'ahmedabad', label: 'Ahmedabad' }]
  const country = [{ value: 'australia', label: 'Australia' }, { value: 'india', label: 'India' }, { value: 'argentina', label: 'Argentina' }, { value: 'germany', label: 'Germany' }]

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Box sx={{ width: '60%', maxWidth: 1000, mt: 4, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Address Details</Typography>
          <Grid item xs={12}>
              <Typography variant="subtitle1">Permanent Address</Typography>
            </Grid>
          <Box sx={{ width: '80%', maxWidth: 1000, mt: 4,ml:5, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>

          <Grid container spacing={2}>
           

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Flat/House no</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Flat/House No."
                variant="outlined"
                placeholder="Please Enter Flat/House No."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Landmark</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Near By Landmark"
                variant="outlined"
                placeholder="Please Enter Landmark"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">State</Typography>
              <TextField
                size='small'

                fullWidth

                select
                label="Select State"
                variant="outlined"
              >
                {state.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">District</Typography>
              <TextField
                size='small'


                fullWidth

                select
                label="Select District"
                variant="outlined"
              >
                {district.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Country</Typography>
              <TextField
                size='small'


                fullWidth

                select
                label="Select Country"
                variant="outlined"
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Pincode</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Pincode"
                variant="outlined"
                placeholder="Please Enter Pincode"
              />
            </Grid>
          </Grid>
          </Box>
          <Grid item xs={12}>
              <Typography sx={{
                mt: 4,
              }} variant="subtitle1">Corresspondance  Address</Typography>
            </Grid>
          <Box sx={{ width: '80%', maxWidth: 1000, mt: 4,ml:5, p: 4, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>

          <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Flat/House no</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Flat/House No."
                variant="outlined"
                placeholder="Please Enter Flat/House No."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Landmark</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Near By Landmark"
                variant="outlined"
                placeholder="Please Enter Landmark"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">State</Typography>
              <TextField
                size='small'

                fullWidth

                select
                label="Select State"
                variant="outlined"
              >
                {state.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">District</Typography>
              <TextField
                size='small'

                fullWidth

                select
                label="Select District"
                variant="outlined"
              >
                {district.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Country</Typography>
              <TextField
                size='small'

                fullWidth

                select
                label="Select Country"
                variant="outlined"
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Pincode</Typography>
              <TextField
                size='small'

                fullWidth
                label="Please Enter Pincode"
                variant="outlined"
                placeholder="Please Enter Pincode"
              />
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Address;
