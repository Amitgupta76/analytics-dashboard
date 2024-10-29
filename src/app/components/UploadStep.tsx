import { Box, IconButton, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { dataCardStyle, uploadAreaStyle } from "../styles/dataIntegrationStyles";
import Image from "next/image";
import upload from "../public/assets/upload.png";
import csv from "../public/assets/csv.png";
import CancelIcon from "@mui/icons-material/Cancel";

const UploadStep: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (uploadedFile && uploadedFile.type === "text/csv") {
            setFile(uploadedFile);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const uploadedFile = event.dataTransfer.files[0];
        if (uploadedFile && uploadedFile.type === "text/csv") {
            setFile(uploadedFile);
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

    const handleCancel = () => {
        setFile(null);
    };

    if (file) {
        return (
            <Box
                sx={{
                    ...dataCardStyle, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "auto",
                }}
            >
                <Image src={csv} alt="CSV Icon" width={24} height={24} />
                <Typography variant="body1" noWrap sx={{ mx: 1, flexGrow: 1 }}>
                    {file.name}
                </Typography>
                <IconButton
                    size="small"
                    onClick={handleCancel}
                    className="cancel-button"
                    sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                >
                    <CancelIcon />
                </IconButton>
            </Box>
        );
    }

    return (
        <Box
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleAreaClick}
            sx={uploadAreaStyle}
        >
            <Image src={upload} alt="Upload Icon" width={96} height={96} />
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
    );
};

export default UploadStep;
