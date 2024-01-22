import Header from "./Header";
import AddForm from "./AddForm";
import Habits from "./Habits";
import "../styles/RootStyle.css";
function Root() {
  return (
    <>
      <Header></Header>
      <AddForm></AddForm>
      <Habits></Habits>
    </>
  );
}

export default Root;
