import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { dataCardStyle } from "../styles/dataIntegrationStyles";
import Image from "next/image";

interface DatasourceCardProps {
    src: StaticImageData;
    alt: string;
    title: string;
    handleOnClick?: () => void;
}

const DatasourceCard: React.FC<DatasourceCardProps> = ({ src, alt, title, handleOnClick }) => (
    <Box onClick={handleOnClick} sx={{ ...dataCardStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image src={src} alt={alt} width={96} height={96} />
        <Typography variant="h5" sx={{ mt: 1 }}>
            {title}
        </Typography>
    </Box>
);

export default DatasourceCard;