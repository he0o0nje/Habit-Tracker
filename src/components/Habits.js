// import "../styles/HabitsStyle.css";
import HabitList from "./HabitList";
import Button from "@mui/material/Button";

function Habits({ habits }) {
  return (
    <>
      <ul>
        {habits.map((habit) => {
          return <HabitList habit={habit} key={habit.id}></HabitList>;
        })}
      </ul>
      <Button variant="contained" color="error" sx={{ width: "80%" }}>
        RESET ALL
      </Button>
    </>
  );
}

export default Habits;
