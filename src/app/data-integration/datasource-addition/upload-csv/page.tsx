"use client";
import {
  Box, Button, Typography, IconButton, Stepper, Step, StepLabel, Paper
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import {
  containerStyle,
  sectionHeaderStyle,
  buttonContainerStyle,
} from "../../../styles/sharedStyles";
import { useState } from "react";
import { STEPS } from "@/app/constants/dataIntegration";
import UploadStep from "@/app/components/UploadStep";

const UploadCSV = () => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      alert("CSV uploaded successfully!");
      router.push("/data-integration");
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleGoBack = () => router.back();

  return (
    <Box>
      <Box
        sx={{
          ...sectionHeaderStyle,
          justifyContent: "left",
          gap: 0.5,
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleGoBack} color="primary" sx={{ p: 0, mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          Import Data
        </Typography>
      </Box>

      <Box sx={{ ...containerStyle, minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stepper activeStep={0} sx={{ mb: 2 }}>
          <Step>
            <StepLabel>Upload the Data File</StepLabel>
          </Step>
          <Step>
            <StepLabel>Map Fields</StepLabel>
          </Step>
        </Stepper>
        {activeStep === 0 ? <UploadStep /> : <Typography>Map Fields Step (Coming Soon)</Typography>}
      </Box>

      <Box sx={buttonContainerStyle}>
        <Button onClick={handleGoBack} variant="outlined" color="error">
          Cancel
        </Button>
        <Box>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ marginRight: 2 }}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === STEPS.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadCSV;
