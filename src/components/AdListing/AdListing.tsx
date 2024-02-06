import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Advertisement = {
  id: string;
  title: string;
  content: string;
  views: number;
  createdAt: Date;
  adType: string;
  createdBy: string;
};

type AdListingProps = {
  data: Advertisement[];
};

function AdListing({ data }: AdListingProps) {
  return data.map((ad: Advertisement, index) => (
    <Accordion key={index}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingRight: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography>{ad.title}</Typography>
            <Typography>Type: {ad.adType}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography>Views: {ad.views}</Typography>
            <Typography>Created on: {ad.createdAt.toDateString()}</Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{ad.content}</AccordionDetails>
    </Accordion>
  ));
}

export default AdListing;
