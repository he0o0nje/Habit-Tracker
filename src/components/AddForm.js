// import "../styles/AddFormStyle.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function AddForm() {
  return (
    <>
      <TextField
        label="Habit"
        sx={{ width: "80%", marginBottom: "10px" }}
      ></TextField>
      <Button variant="contained" sx={{ width: "80%", marginBottom: "20px" }}>
        ADD
      </Button>
    </>
  );
}

export default AddForm;
