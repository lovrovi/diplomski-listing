import { Button, Paper, Stack } from '@mui/material';

function SidePanel() {
  return (
    <Paper>
      <Stack>
        <Button>Dashboard</Button>
        <Button>Create Ad</Button>
      </Stack>
    </Paper>
  );
}

export default SidePanel;
