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
      {/* 데이터가 10만개 있을때도 생각하여 스크롤, 페이징 하는게 좋음 */}
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
