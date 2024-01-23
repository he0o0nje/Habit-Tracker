import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Habits({ habit, onPlus, onMinus, onDelete }) {
  return (
    <li style={{ marginBottom: "20px" }}>
      <TextField
        id="outlined-read-only-input"
        label="이름"
        defaultValue={habit.name}
        InputProps={{
          readOnly: true,
        }}
        sx={{ marginRight: "10px" }}
      />
      <TextField
        id="outlined-read-only-input"
        label="점수"
        value={habit.count}
        InputProps={{
          readOnly: true,
        }}
        sx={{ width: "60px", marginRight: "10px" }}
      />
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
        onClick={() => onPlus(habit.id)}
      >
        +
      </Button>
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
        color="inherit"
        onClick={() => onMinus(habit.id)}
      >
        -
      </Button>
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
        color="error"
        onClick={() => onDelete(habit.id)}
      >
        X
      </Button>
    </li>
  );
}

export default Habits;
