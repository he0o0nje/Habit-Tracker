function Header({ totalCount }) {
  return (
    <>
      <h2>👀Habit Tracker👀</h2>
      <div style={{ marginBottom: "30px" }}>Total = {totalCount}</div>
    </>
  );
}

export default Header;
