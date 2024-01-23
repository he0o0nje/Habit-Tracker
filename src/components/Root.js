import Header from "./Header";
import AddForm from "./AddForm";
import HabitList from "./HabitList";
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

  const totalCount = habits.filter((habit) => habit.count > 0).length;

  const handleAddHabit = (name) => {
    const newHabit = {
      id: habits.length + 1,
      name,
      count: 0,
    };
    setHabits([...habits, newHabit]);
  };

  const handlePlus = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, count: habit.count + 1 } : habit
      )
    );
  };

  const handleMinus = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id
          ? { ...habit, count: Math.max(0, habit.count - 1) }
          : habit
      )
    );
  };

  const handleDeleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  const handleDeleteAllHabits = () => {
    setHabits([]);
  };

  console.log(habits);

  return (
    <div className="root">
      <>
        <Header totalCount={totalCount}></Header>
        <AddForm onAdd={handleAddHabit}></AddForm>
        <HabitList
          habits={habits}
          onPlus={handlePlus}
          onMinus={handleMinus}
          onDelete={handleDeleteHabit}
          onDeleteAll={handleDeleteAllHabits}
        ></HabitList>
      </>
    </div>
  );
}

export default Root;
