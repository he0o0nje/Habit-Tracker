import Header from "./Header";
import AddForm from "./AddForm";
import Habits from "./Habits";
import "../styles/RootStyle.css";
import { useState } from "react";

function Root() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Habit1",
      count: 0,
    },
    {
      id: 2,
      name: "Habit2",
      count: 0,
    },
    {
      id: 3,
      name: "Habit3",
      count: 0,
    },
  ]);

  return (
    <div className="root">
      <>
        <Header></Header>
        <AddForm></AddForm>
        <Habits habits={habits}></Habits>
      </>
    </div>
  );
}

export default Root;
