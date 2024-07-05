import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';

import { Container, Box, Typography, Grid, Button } from '@mui/material'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Declarationinfo = () => {
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
      <Box sx={{ display: 'flex', justifyContent: 'center' ,minHeight:'50vh'}}>
        <Box sx={{ width: '60%', maxWidth: 1000, mt: 4, py: 1,px:1, border: '1px solid #ccc', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>Declaration</Typography>
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} >
              <Checkbox sx={{mt:5}}/>
            </Grid>
            <Grid item xs={11} md={11} >
              <Typography sx={{mt:5}}>
                I declare that the entries made in the columns
                of this proforma are correct and true to the
                best of my knowledge and nothing has been
                either concealed or misrepresented by me.
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2, p: 1 }}>
                <Typography sx={{ mr: 2, fontWeight: 'bold' }}>Signature</Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </Grid>
          </Grid> */}
        </Box>
      </Box>


    </Container>
  )
}

export default Declarationinfo
