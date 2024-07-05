// import React from 'react'
// import { Box, Step, Stepper, StepButton, Grid, Button, Typography, TextField } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs, { Dayjs } from 'dayjs';
// const Personalinfo = () => {
//     const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

//   return (
//     <>
//        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
//     <Typography variant="body1" color="#FF0000" fontSize="16px" textAlign="center">
//       * Please ensure that no column is left blank; but you may not fill up the column which does not concern you.
//     </Typography>
//   </Box>,
  
//   <Box sx={{
//     border: '1px solid grey', height: '50vh', width: '70%', display: 'flex', flexDirection: 'column',
//     justifyContent: 'flex-start', alignItems: 'center'
//   }}>
//     <Typography variant='body1' color="#FF0000" fontSize="16px" textAlign="center" >For Office Use Only</Typography>

//     <Grid container spacing={2} m={2} display='flex'>
//       <Grid item xs={6}>

//       </Grid>
//       <Grid item xs={6} >
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>

//           <Typography>Index No </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}><Typography>File No.</Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} /></Box>

//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//           <Typography>Date of Empanelment</Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>

//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//           <Typography>Degree/Diploma/Subject  </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//           <Typography>Code </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>


//           <Typography>Specialisation  </Typography>
//           <TextField id="space-around" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>

//           <Typography>Code </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>

//           <Typography>Super Specialisation  </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: "flex", justifyContent: "space-around" }}>

//           <Typography>Code </Typography>
//           <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//         </Box>
//       </Grid>

//     </Grid>

//   </Box>
//   {/* Personal Information ----------------------------*/}
//   <Box p={4} display='flex' justifyContent='center' alignItems='center'>
//     <Grid container spacing={2} sx={{ p: 2, ml: "40px", mr: "40px" }}>
//       <Grid item xs={12}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={4} >
//               <Typography>Full Name (Prof./Dr./Sh./Smt./Km.)</Typography>
//             </Grid>
//             <Grid xs={8}>
//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000', ml: 2 }} />
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12} >
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={7}>
//               <Typography>
//                 Date of Birth (Illustration: If your date of birth is 3rd September 1940, please fill it up as 03.09.1940)
//               </Typography>
//             </Grid>
//             <Grid xs={5}>
//               {/* <TextField id="standard-basic" variant="standard" sx={{ color: '#000', ml: 2 }} /> */}
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DemoContainer components={['DatePicker', 'DatePicker']}>
//                   <DatePicker
//                     value={value}
//                     onChange={(newValue) => setValue(newValue)}
//                   />
//                 </DemoContainer>
//               </LocalizationProvider>
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={4}>
//               <Typography>Community i.e. SC/ST/OBC/General </Typography>
//             </Grid>
//             <Grid xs={8}>

//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>

//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//               <Grid xs={4}>

//                 <Typography>Nationality</Typography>
//               </Grid>
//               <Grid xs={8}>

//                 <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//               <Grid xs={6}>

//                 <Typography>Gender </Typography>
//               </Grid>
//               <Grid xs={6}>

//                 <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//               </Grid>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xs={12}>


//         </Grid>

//       </Grid>
//       <Grid item xs={12}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={7}>

//               <Typography>Whether belongs to a minority Community?
//                 If yes, please specify (viz. Muslims,
//                 Christians, Sikhs, Buddhists or
//                 Zoroastrians (Parsis) ) </Typography>
//             </Grid>
//             <Grid xs={5}>

//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>

//       <Grid item xs={12}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={7}>

//               <Typography> Postal Address
//                 (If residential address is the postal address,)
//                 please indicate so
//                 (Please note that the UPSC will send all the
//                 correspondence to you at this address)</Typography>
//             </Grid>
//             <Grid xs={5}>

//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//           <Grid xs={4}>

//             <Typography>Pincode</Typography>
//           </Grid>
//           <Grid xs={8}>

//             <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//           </Grid>
//         </Box>
//       </Grid>
//       <Grid xs={12}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//           <Grid item xs={6}>

//             <Typography>Telephone No. </Typography>

//           </Grid>
//           <Grid item xs={6}>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//               <Grid xs={3}>


//                 <Typography>Office </Typography></Grid>
//               <Grid xs={3}>
//                 <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//               </Grid>
//             </Box>


//           </Grid>
//         </Box>
//       </Grid>
//       <Grid xs={12}>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//         <Grid item xs={6}>

//         </Grid>
//         <Grid item xs={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={3}>
//               <Typography>Residence</Typography>
//             </Grid>
//             <Grid xs={3}>
//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>

//           </Box>
//         </Grid>
//         </Box>
//       </Grid>
//       <Grid xs={12}>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//         <Grid item xs={6}>

//         </Grid>
//         <Grid item xs={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={3}>
//               <Typography>Mobile No.</Typography>
//             </Grid>
//             <Grid xs={3}>
//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>

//           </Box>
//         </Grid>
//         </Box>
//       </Grid>
//       <Grid xs={12}>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//         <Grid item xs={6}>

//         </Grid>
//         <Grid item xs={6}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//             <Grid xs={3}>
//               <Typography>Fax No</Typography>
//             </Grid>
//             <Grid xs={3}>
//               <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />
//             </Grid>

//           </Box>
//         </Grid>
//         </Box>
//       </Grid>
//       <Grid item xs={6}>

//       </Grid>
//       <Grid item xs={6}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>

//             <Typography>Email</Typography>
//             <TextField id="standard-basic" variant="standard" sx={{ color: '#000' }} />


//           </Box>
//         </Box>
//       </Grid>











//     </Grid>
//   </Box>
//     </>
//   )
// }

// export default Personalinfo
import React from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

const Personalinfo = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <>
    

      {/* Personal Information Section */}
      <Box p={4} display='flex' justifyContent='center' alignItems='center'>
        <Grid container spacing={2} sx={{ width: '70%', m: 'auto' }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Full Name (Prof./Dr./Sh./Smt./Km.)</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
            
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography >
                Date of Birth 
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  
                />
              </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Community i.e. SC/ST/OBC/General</Typography>
              <TextField variant="outlined"  sx={{width:'70%'}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Nationality</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Gender</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>
                Community
              </Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography sx={{ width: '60%' }}>
                Postal Address (If residential address is the postal address, please indicate so. Please note that the UPSC will send all the correspondence to you at this address)
              </Typography>
              <TextField variant="outlined" sx={{ width: '30%' }} />
          </Grid> */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Pincode</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Telephone No.</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Office</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Residence</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Mobile No.</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Fax No.</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid> */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
              <Typography>Email</Typography>
              <TextField variant="outlined" sx={{ width: '70%' }} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Personalinfo;

