"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Papa from "papaparse";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  Switch,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CancelIcon from "@mui/icons-material/Cancel";
import { sectionHeaderStyle, buttonContainerStyle, containerStyle } from "../styles/sharedStyles";
import { dataCardStyle, uploadAreaStyle } from "../styles/dataIntegrationStyles";
import Image from "next/image";
import csvIcon from "../public/assets/csv.png";
import uploadIcon from "../public/assets/upload.png";
import { STEPS } from "@/app/constants/dataIntegration";

const fieldTypes = ["String", "Float", "Integer", "Date"];
const dateFormats = [
  "dd/mm/yyyy", "mm/dd/yyyy", "yyyy/mm/dd",
  "dd-mm-yyyy", "mm-dd-yyyy", "yyyy-mm-dd",
  "dd.mm.yyyy", "mm.dd.yyyy", "yyyy.mm.dd"
];

const CsvUploadAndMapping = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [, setFieldTypeSelections] = useState<string[]>([]);
  const [, setMandatoryFlags] = useState<boolean[]>([]);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      parseCSV(uploadedFile);
    } else {
      alert("Please select a CSV file.");
    }
  };

  const parseCSV = (file: File) => {
    Papa.parse(file, {
      complete: (result: { data: string[][]; }) => {
        const rows = result.data as string[][];
        const headers = rows[0] as string[];
        const sampleRows = rows.slice(1, 3);
        setHeaders(headers);
        setCsvData(sampleRows);
        setFieldTypeSelections(new Array(headers.length).fill("String"));
        setMandatoryFlags(new Array(headers.length).fill(false));
      },
      header: false,
      skipEmptyLines: true
    });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => event.preventDefault();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      parseCSV(uploadedFile);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleAreaClick = () => {
    const input = document.getElementById("csv-input") as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const handleCancelUpload = () => setFile(null);

  const handleNext = () => {
    if (activeStep < STEPS.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      alert("CSV uploaded successfully!");
      router.push("/data-integration");
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(prev => prev - 1);
  };

  const handleGoBack = () => router.back();

  const renderHeaderRow = () =>
    <TableRow>
      <TableCell>Field label</TableCell>
      {headers.map((header, index) => (
        <TableCell key={index} align="center">
          {header}
        </TableCell>
      ))}
    </TableRow>;

  const renderFieldTypeRow = () =>
    headers.map((_, index) => (
      <TableCell key={index} align="center">
        <FormControl fullWidth>
          <Select defaultValue="String">
            {fieldTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
    ));

  const renderDateFormatRow = () =>
    headers.map((_, index) => (
      <TableCell key={index} align="center">
        <FormControl fullWidth>
          <Select displayEmpty defaultValue="">
            <MenuItem value="">Please Select</MenuItem>
            {dateFormats.map((format) => (
              <MenuItem key={format} value={format}>
                {format}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
    ));

  const renderUniqueMandatoryRow = () =>
    headers.map((_, index) => (
      <TableCell key={index} align="center">
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <Switch size="small" />
          <Switch size="small" />
        </div>
      </TableCell>
    ));

  const renderSampleDataRows = () =>
    csvData.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        <TableCell>Sample data</TableCell>
        {row.map((cell, cellIndex) => (
          <TableCell key={cellIndex} align="center">
            {cell}
          </TableCell>
        ))}
      </TableRow>
    ));

  return (
    <Box>
      <Box sx={{ ...sectionHeaderStyle, justifyContent: "left", gap: 0.5, alignItems: "center" }}>
        <IconButton onClick={handleGoBack} color="primary" sx={{ p: 0, mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">Import Data</Typography>
      </Box>

      <Box sx={{ ...containerStyle, minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <>
            {file ? (
              <Box
                sx={{
                  ...dataCardStyle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "auto",
                }}
              >
                <Image src={csvIcon} alt="CSV Icon" width={24} height={24} />
                <Typography variant="body1" noWrap sx={{ mx: 1, flexGrow: 1 }}>
                  {file.name}
                </Typography>
                <IconButton
                  size="small"
                  onClick={handleCancelUpload}
                  className="cancel-button"
                  sx={{
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <CancelIcon />
                </IconButton>
              </Box>
            ) : (
              <Box
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleAreaClick}
                sx={uploadAreaStyle}
              >
                <Image src={uploadIcon} alt="Upload Icon" width={96} height={96} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Select a CSV file to upload
                </Typography>
                <Typography variant="subtitle1" color="info">
                  or drag & drop it here
                </Typography>

                <input
                  type="file"
                  accept=".csv"
                  style={{ display: "none" }}
                  id="csv-input"
                  onChange={handleFileChange}
                />
              </Box>
            )}
          </>
        )}

        {activeStep === 1 && csvData.length > 0 && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                {renderHeaderRow()}
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Field type</TableCell>
                  {renderFieldTypeRow()}
                </TableRow>
                <TableRow>
                  <TableCell>Date format</TableCell>
                  {renderDateFormatRow()}
                </TableRow>
                <TableRow>
                  <TableCell>Unique/Mandatory</TableCell>
                  {renderUniqueMandatoryRow()}
                </TableRow>
                {renderSampleDataRows()}
              </TableBody>
            </Table>

          </TableContainer>
        )}
      </Box>

      <Box sx={buttonContainerStyle}>
        <Button onClick={handleGoBack} variant="outlined" color="error">Cancel</Button>
        <Box>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 2 }}>Back</Button>
          <Button disabled={!file} variant="contained" onClick={handleNext}>{activeStep === STEPS.length - 1 ? "Finish" : "Next"}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CsvUploadAndMapping;
