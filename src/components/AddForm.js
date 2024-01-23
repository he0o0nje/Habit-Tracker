import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRef } from "react";

function AddForm({ onAdd }) {
  const inputRef = useRef();

  const handleAdd = () => {
    const habitName = inputRef.current.value;
    if (habitName.trim() !== "") {
      onAdd(habitName);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <TextField
        label="Habit"
        sx={{ width: "80%", marginBottom: "10px" }}
        inputRef={inputRef}
      ></TextField>
      <Button
        variant="contained"
        sx={{ width: "80%", marginBottom: "20px" }}
        onClick={handleAdd}
      >
        ADD
      </Button>
    </>
  );
}

export default AddForm;
