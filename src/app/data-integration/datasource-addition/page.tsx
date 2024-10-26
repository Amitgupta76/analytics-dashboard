import { cardGridStyle, dataCardStyle } from "@/app/styles/dataIntegrationStyles";
import csv_upload from "../../public/assets/csv_upload.png";
import webhook from "../../public/assets/webhook.png";
import datasource from "../../public/assets/datasource.png";
import { containerStyle, sectionHeaderStyle } from "@/app/styles/sharedStyles";
import { Box, Typography } from "@mui/material";
import DatasourceCard from "@/app/components/DatasourceCard";

const DatasourceAdditionPage: React.FC = () => (
    <Box sx={containerStyle}>
        <Typography variant="h4" component="h1" sx={sectionHeaderStyle}>
            Add a new datasource
        </Typography>

        <Box sx={cardGridStyle}>
            <DatasourceCard src={csv_upload} alt="CSV Upload" title="Upload a CSV" />
            <DatasourceCard src={webhook} alt="Webhook" title="Add a Webhook" />
        </Box>

        <Typography variant="h4" component="h1" sx={sectionHeaderStyle}>
            Create a derived datasource
        </Typography>

        <Box sx={cardGridStyle}>
            <DatasourceCard src={datasource} alt="Datasource" title="Select Datasource" />
        </Box>
    </Box>
);

export default DatasourceAdditionPage;
