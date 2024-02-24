import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type DropdownProps = {
  label: string;
  value: string | number;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  items: {
    value: number | string;
    label: string;
  }[];
};

function Dropdown({ label, value, onChange, items }: DropdownProps) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange}>
        {items.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
