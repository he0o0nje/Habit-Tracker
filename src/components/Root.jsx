import Header from "./Header";
import AddForm from "./AddForm";
import HabitList from "./HabitList";
import "../styles/RootStyle.css";
import { useState } from "react";

function Root() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Habit1", // 고유한 값이므로 name를 id로 사용해도 좋음
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
    const isNameExist = habits.some((habit) => habit.name === name);
    if (!isNameExist) {
      const newHabit = {
        id: habits.length > 0 ? habits[habits.length - 1].id + 1 : 1,
        name,
        count: 0,
      };
      setHabits([...habits, newHabit]);
    } else {
      alert(`중복된 Habit이 있습니다.`);
    }

    // findIndex 방법 ✔️
    // const index = habits.findIndex((habit) => habit.name === name);
    // if (index === -1) {
    //   const newHabit = {
    //     id: habits.length > 0 ? habits[habits.length - 1].id + 1 : 1,
    //     name,
    //     count: 0,
    //   };
    //   setHabits([...habits, newHabit]);
    // } else {
    //   alert(`중복된 Habit이 있습니다.`);
    // }

    // find 방법 ✔️
    // const isNameExist = habits.find((habit) => habit.name === name);
    // if (!isNameExist) {
    //   const newHabit = {
    //     id: habits.length > 0 ? habits[habits.length - 1].id + 1 : 1,
    //     name,
    //     count: 0,
    //   };
    //   setHabits([...habits, newHabit]);
    // } else {
    //   alert("중복된 Habit이 있습니다.");
    // }
  };

  const handlePlus = (id) => {
    const result = habits.map((habit) =>
      habit.id === id ? { ...habit, count: habit.count + 1 } : habit
    );
    setHabits(result); // 코드리뷰 후 수정 ✔️

    // findIndex 방법 ✔️
    // const index = habits.findIndex((habit) => habit.id === id);
    // if (index !== -1) {
    //   const updatedHabits = [...habits];
    //   updatedHabits[index] = {
    //     ...updatedHabits[index],
    //     count: updatedHabits[index].count + 1,
    //   };
    //   setHabits(updatedHabits);
    // }
  };

  const handleMinus = (id) => {
    const result = habits.map((habit) =>
      habit.id === id
        ? { ...habit, count: Math.max(0, habit.count - 1) }
        : habit
    );
    setHabits(result); // 코드리뷰 후 수정 ✔️
  };

  const handleDeleteHabit = (id) => {
    const result = habits.filter((habit) => habit.id !== id);
    setHabits(result); // 코드리뷰 후 수정 ✔️
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
