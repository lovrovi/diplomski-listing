import { Button, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SidePanel() {
  const navigate = useNavigate();

  return (
    <Paper>
      <Stack>
        <Button onClick={() => navigate("/")}>Dashboard</Button>
        <Button onClick={() => navigate("/form")}>Create Ad</Button>
      </Stack>
    </Paper>
  );
}

export default SidePanel;
