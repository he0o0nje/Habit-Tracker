import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useRef } from "react";

function AddForm({ onAdd }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    const habitName = inputRef.current.value;
    if (habitName.trim() !== "") {
      onAdd(habitName);
      inputRef.current.value = "";
    } else if (inputRef.current.value === "") {
      alert("Habit을 입력해주세요.");
    }
    inputRef.current.focus();
  };

  const enterKey = (event) => {
    if (event.keyCode === 13) {
      handleAdd();
      inputRef.current.focus();
    }
  };

  return (
    <>
      <TextField
        label="Habit"
        sx={{ width: "80%", marginBottom: "10px" }}
        inputRef={inputRef}
        onKeyUp={enterKey}
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
