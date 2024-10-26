import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { dataCardStyle } from "../styles/dataIntegrationStyles";
import Image from "next/image";

const DatasourceCard = ({ src, alt, title }: { src: StaticImageData; alt: string; title: string }) => (
    <Box sx={{ ...dataCardStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image src={src} alt={alt} width={96} height={96} />
        <Typography variant="h5" sx={{ mt: 1 }}>
            {title}
        </Typography>
    </Box>
);

export default DatasourceCard;