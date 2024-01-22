// import "../styles/HabitListStyle.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function HabitList({ habit }) {
  const { id, name, count } = habit;

  return (
    <li style={{ marginBottom: "20px" }}>
      {/* <span>{name}</span> */}
      <TextField
        id="outlined-read-only-input"
        label="이름"
        defaultValue={name}
        InputProps={{
          readOnly: true,
        }}
        sx={{ marginRight: "10px" }}
      />
      {/* <span>{count}</span> */}
      <TextField
        id="outlined-read-only-input"
        label="점수"
        defaultValue={count}
        InputProps={{
          readOnly: true,
        }}
        sx={{ width: "60px", marginRight: "10px" }}
      />
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
      >
        +
      </Button>
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
        color="inherit"
      >
        -
      </Button>
      <Button
        variant="contained"
        sx={{ marginRight: "10px", fontSize: "25px" }}
        color="error"
      >
        X
      </Button>
    </li>
  );
}

export default HabitList;
