"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  MenuItem,
  TextField,
  Button,
  Divider,
  FormControl,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm } from "react-hook-form";
import { nameValidation, emailValidation } from "../../utils/validationPaterns";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PersonalDetails = (props: any) => {

  const [selectedInitials, setSelectedInitials] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedIdProof, setSelectedIdProof] = useState('')
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('')
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState('');




  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    props.setData({ ...props.allData, personalInformation: data });
  };
  console.log(errors, "errors");

  // const handleMaritalStatusChange = (e: any) => setMaritalStatusInput(e.target.value);

  const handleUppercase = (e: any) => {
    const uppercaseValue = e.target.value.toUpperCase();
    setValue(e.target.name, uppercaseValue);
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "60%",
            maxWidth: 1000,
            mt: 4,
            p: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Personal Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: 4,
            }}
          >
            <AccountCircleIcon sx={{ fontSize: 80 }} />
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ mt: 2 }}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>

          <Grid container spacing={2}>
            {/** Render each field with its own Typography for label */}
            <Grid item xs={5} md={3}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Initials
              </Typography>
              <TextField
                size='small'
                fullWidth
                select
                label="Select initials"
                variant="outlined"
                value={selectedInitials}
                onChange={(e) => setSelectedInitials(e.target.value)


                }
              >
                {console.log(props.initials, '1234')}
                {props.initials &&
                  props.initials.length > 0 &&
                  props.initials[0].data.map((initial: any, i:number) => {
                    // console.log(props.initials, 'hhhhhh')
                    console.log(initial, i); // <-- Insert console.log here

                    return (
                      <MenuItem key={initial.value} value={initial.Initial_Id}>
                        {initial.Initial_Name_En}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
            <Grid item xs={7} md={9}>
              <Typography variant="subtitle1">Full Name</Typography>
              <TextField
                size="small"
                fullWidth
                label="Full Name"
                variant="outlined"
                placeholder="Please Enter Name"
                {...register("fullName", {
                  required: true,
                  maxLength: 100,
                  minLength: 2,
                  onChange: handleUppercase,
                  pattern: nameValidation,
                })}
                error={errors.fullName ? true : false}
                helperText={errors.fullName ? 'enter a valid name' : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                Gender
              </Typography>

              <TextField
                size='small'
                fullWidth
                select
                label="Select gender"
                variant="outlined"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
               {props.gender &&
                  props.gender.length > 0 &&
                  props.gender[0].data.map((gender: any, i:number) => {
                    console.log(gender, i); 

                    return (
                      <MenuItem key={gender.value} value={gender.genderId}>
                        {gender.genderNameEn}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">DOB</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                {...register("dob", { required: true })}
              >
                <DatePicker

                  sx={{
                    "& .MuiInputBase-root": {
                      height: "40px",
                      width: "100%",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 14px",
                    },
                  }}
                  label="Date of Birth"
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1">ID Proof</Typography>
              <Box display="flex" alignItems="center">
                <TextField
                  size='small'
                  fullWidth
                  select
                  label="Select Id Proof"
                  variant="outlined"
                  value={selectedIdProof}
                  onChange={(e) => setSelectedIdProof(e.target.value)}
                >
                   {props.idProof &&
                  props.idProof.length > 0 &&
                  props. idProof[0].data.map(( idProof: any, i:number) => {
                    console.log( idProof, i); 

                    return (
                      <MenuItem key={ idProof.value} value={ idProof.identityTypeId}>
                        { idProof.identityTypeNameEn}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </Box>
            </Grid>
            <Grid item xs={9} sx={{ display: "flex" }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">ID Proof No.</Typography>
                <Grid sx={{ display: "flex" }}>
                  <Grid item xs={9}>
                    <TextField
                      size="small"
                      fullWidth
                      label="ID Proof No."
                      variant="outlined"
                      placeholder="Please Enter ID Proof No."
                      {...register("IDProofNo", { required: true })}
                      error={errors.IDProofNo ? true : false}
                      helperText={errors.IDProofNo ? 'enter a valid ID Number' : ''}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                      sx={{ ml: 2, width: "85%" }}
                    >
                      Upload
                      <VisuallyHiddenInput type="file" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

          
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Father&apos;s Name</Typography>
              <TextField
                size="small"
                fullWidth
                label="Father's Name"
                variant="outlined"
                placeholder="Please Enter Name"
                {...register("fatherName", {
                  required: true,
                  maxLength: 25,
                  minLength: 2,
                  onChange: handleUppercase,
                })}
                error={errors.fatherName ? true : false}
                helperText={errors.fatherName ? 'enter a valid name' : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Mother&apos;s Name</Typography>
              <TextField
                size="small"
                fullWidth
                label="Mother's Name"
                variant="outlined"
                placeholder="Please Enter Name"
                {...register("motherName", {
                  required: true,
                  maxLength: 25,
                  minLength: 2,
                  onChange: handleUppercase,
                })}
                error={errors.motherName ? true : false}
                helperText={errors.motherName ? 'enter a valid name' : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Marital Status</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Marital Status"
                variant="outlined"
                value={selectedMaritalStatus}
                {...register("maritalStatus", {
                  // onChange: handleMaritalStatusChange,
                  required: true,
                })}
                onChange={(e) => setSelectedMaritalStatus(e.target.value)}


                error={errors.maritalStatus ? true : false}
                helperText={errors.maritalStatus ? 'required' : ''}
              >
                  {props.maritalStatus &&
                  props.maritalStatus.length > 0 &&
                  props. maritalStatus[0].data.map(( maritalStatus: any, i:number) => {
                    console.log( maritalStatus, i); 

                    return (
                      <MenuItem key={ maritalStatus.value} value={ maritalStatus.maritalStatusId}>
                        { maritalStatus.maritalStatusNameEn}
                      </MenuItem>
                    );
                  })}

              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Spouse Name</Typography>
              <TextField
                size="small"
                fullWidth
                label="Spouse Name"
                variant="outlined"
                placeholder="Please Enter Name"
                {...register("spouseName", {
                  maxLength: 25,
                  minLength: 2,
                  onChange: handleUppercase,
                })}
                error={errors.spouseName ? true : false}
                helperText={errors.spouseName ? 'enter a valid name' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Mobile No.</Typography>
              <TextField
                size="small"
                fullWidth
                label="Mobile No."
                variant="outlined"
                type="number"
                placeholder="Please Enter Mobile No."
                {...register("mobileNo", {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
                error={errors.mobileNo ? true : false}
                helperText={errors.mobileNo ? 'enter a valid number' : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Email Id</Typography>
              <TextField
                size="small"
                fullWidth
                label="Email Id"
                variant="outlined"
                placeholder="Please Enter Email Id"
                {...register("emailId", {
                  required: true,
                  pattern: emailValidation,
                })}
                error={errors.emailId ? true : false}
                helperText={errors.emailId ? 'enter a valid Email ID' : ''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Community</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Community"
                variant="outlined"
                value={selectedCommunity}
                {...register("community", { required: true })}
                error={errors.community ? true : false}
                helperText={errors.community ? 'required' : ''}
                onChange={(e) => setSelectedCommunity(e.target.value)}

              >
             {props.community &&
                  props.community.length > 0 &&
                  props. community[0].data.map(( community: any, i:number) => {
                    console.log( community, i); 

                    return (
                      <MenuItem key={ community.value} value={ community.communityId}>
                        {community.communityNameEn}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Languages</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Language"
                variant="outlined"
                value={selectedLanguages}
                {...register("language", { required: true })}
                error={errors.language ? true : false}
                helperText={errors.language ? 'required' : ''}
                onChange={(e) => setSelectedLanguages(e.target.value)}

              >
                {props.languages &&
                  props.languages.length > 0 &&
                  props. languages[0].data.map(( languages: any, i:number) => {
                    console.log(languages, i); 

                    return (
                      <MenuItem key={ languages.value} value={ languages.motherTongueId}>
                        {languages.motherTongueNameEn}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Level Of Language</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Level"
                variant="outlined"
                {...register("levelOfLanguages", { required: true })}
                error={errors.levelOfLanguages ? true : false}
                helperText={errors.levelOfLanguages ? 'required' : ''}
              >

              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Blood Group</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Blood Group"
                value={selectedBloodGroup}
                variant="outlined"
                {...register("bloodGroup", { required: true })}
                error={errors.bloodGroup ? true : false}
                helperText={errors.bloodGroup ? 'required' : ''}
                onChange={(e) => setSelectedBloodGroup(e.target.value)}

              >
                 {props.bloodGroup &&
                  props.bloodGroup.length > 0 &&
                  props. bloodGroup[0].data.map(( bloodGroup: any, i:number) => {
                    console.log(bloodGroup, i); 

                    return (
                      <MenuItem key={ bloodGroup.value} value={ bloodGroup.bloodGroupId}>
                        {bloodGroup.bloodGroup}
                      </MenuItem>
                    );
                  })}
              </TextField>
            </Grid>
          </Grid>
          {/* <Button onClick={handleSubmit(onSubmit)}>submit</Button> */}
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalDetails;
