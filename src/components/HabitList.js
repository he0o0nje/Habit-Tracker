import Habits from "./Habits";
import Button from "@mui/material/Button";

function HabitList({ habits, onPlus, onMinus, onDelete, onDeleteAll }) {
  return (
    <>
      <ul>
        {habits.map((habit) => (
          <Habits
            habit={habit}
            onPlus={onPlus}
            onMinus={onMinus}
            onDelete={onDelete}
            key={habit.id}
          />
        ))}
      </ul>
      <Button
        variant="contained"
        color="error"
        sx={{ width: "80%" }}
        onClick={onDeleteAll}
      >
        RESET ALL
      </Button>
    </>
  );
}

export default HabitList;
