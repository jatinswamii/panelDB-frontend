"use client";
import React from "react";
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
  const initials = [
    { value: "mr.", label: "Mr." },
    { value: "mrs.", label: "Mrs." },
    { value: "dr.", label: "Dr." },
    { value: "miss.", label: "Miss." },
  ];
  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "transgender", label: "Transgender" },
  ];
  const bloodGroup = [
    { value: "a+", label: "A+" },
    { value: "a-", label: "A-" },
    { value: "b+", label: "B+" },
    { value: "b-", label: "B-" },
    { value: "ab+", label: "AB+" },
    { value: "ab-", label: "AB-" },
  ];
  const idProof = [
    { value: "aadhar card", label: "Aadhar Card" },
    { value: "driving license", label: "Driving License" },
    { value: "passport", label: "Passport" },
  ];
  const community = [
    { value: "general", label: "General" },
    { value: "obc", label: "OBC" },
    { value: "sc", label: "SC" },
    { value: "st", label: "ST" },
  ];
  const languages = [
    { value: "hindi", label: "Hindi" },
    { value: "english", label: "English" },
    { value: "german", label: "German" },
    { value: "french", label: "French" },
  ];
  const leveloflanguages = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "expert", label: "Expert" },
  ];
  const maritalStatus = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

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
  console.log(errors,"errors");

  const maritalStatusChange = (e: any) => console.log(e.target.value, "yoyto");

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
                size="small"
                fullWidth
                label="Select"
                select
                {...register("initials", { required: true })}
                error={errors.initials?true:false}
                helperText={errors.initials?'required':''}
              >
                {initials.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                error={errors.fullName?true:false}
                helperText={errors.fullName?'enter a valid name':''}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Gender</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Gender"
                variant="outlined"
                {...register("gender", { required: true })}
                error={errors.gender?true:false}
                helperText={errors.gender?'required':''}
              >
                {gender.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                  size="small"
                  fullWidth
                  select
                  label="Select ID "
                  variant="outlined"
                  {...register("IDProof", {
                    required: true,
                    onChange: handleUppercase,
                  })}
                  error={errors.IDProof?true:false}
                  helperText={errors.IDProof?'required':''}
                >
                  {idProof.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
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
                      error={errors.IDProofNo?true:false}
                      helperText={errors.IDProofNo?'enter a valid ID Number':''}
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

              {/* <Grid item xs={12} md={3}>

                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ ml: 2, width: '50%' }}
                >

                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid> */}
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
                error={errors.fatherName?true:false}
                helperText={errors.fatherName?'enter a valid name':''}
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
                error={errors.motherName?true:false}
                helperText={errors.motherName?'enter a valid name':''}
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
                {...register("maritalStatus", {
                  onChange: maritalStatusChange,
                  required: true,
                })}
                error={errors.maritalStatus?true:false}
                helperText={errors.maritalStatus?'required':''}
              >
                {maritalStatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                error={errors.spouseName?true:false}
                helperText={errors.spouseName?'enter a valid name':''}
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
                error={errors.mobileNo?true:false}
                helperText={errors.mobileNo?'enter a valid number':''}
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
                error={errors.emailId?true:false}
                helperText={errors.emailId?'enter a valid Email ID':''}
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
                {...register("community", { required: true })}
                error={errors.community?true:false}
                helperText={errors.community?'required':''}
              >
                {community.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                {...register("language", { required: true })}
                error={errors.language?true:false}
                helperText={errors.language?'required':''}
              >
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
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
                error={errors.levelOfLanguages?true:false}
                helperText={errors.levelOfLanguages?'required':''}
              >
                {leveloflanguages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Blood Group</Typography>
              <TextField
                size="small"
                fullWidth
                select
                label="Select Blood Group"
                variant="outlined"
                {...register("bloodGroup", { required: true })}
                error={errors.bloodGroup?true:false}
                helperText={errors.bloodGroup?'required':''}
              >
                {bloodGroup.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button onClick={handleSubmit(onSubmit)}>submit</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PersonalDetails;
