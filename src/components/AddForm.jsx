import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useRef } from "react";

function AddForm({ onAdd }) {
  const inputRef = useRef();

  useEffect(() => {
    // inputRef.current가 렌더링 시 DOM에 있을 수도 있고 없을 수도 있기에 유효성체크하는게 좋음 ✔️
    if (inputRef.current !== null || typeof inputRef.current == "undefined") {
      inputRef.current.focus();
    }
  }, []);

  const handleAdd = () => {
    // 대,소문자 중복도 확인. 자동으로 변환되게 통일시키는게 좋음 ✔️
    const habitName = inputRef.current.value.toLowerCase();
    const trimmedHabitName = habitName.trim();
    if (trimmedHabitName !== "") {
      onAdd(habitName);
    } else {
      alert("Habit을 입력해주세요.");
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const enterKey = (event) => {
    if (event.keyCode === 13) {
      handleAdd();
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
        sx={{ width: "80%", marginBottom: "15px" }}
        onClick={handleAdd}
      >
        ADD
      </Button>
    </>
  );
}

export default AddForm;
