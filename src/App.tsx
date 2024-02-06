import Grid from '@mui/material/Grid';
import SidePanel from './components/SidePanel/SidePanel';
import MainPanel from './components/MainPanel/MainPanel';

function Test() {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
    >
      <Grid
        item
        xs={6}
      >
        <MainPanel />
      </Grid>
      <Grid
        item
        xs={2}
      >
        <SidePanel />
      </Grid>
    </Grid>
  );
}

export default Test;
