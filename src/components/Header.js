function Header({ totalCount }) {
  return (
    <>
      <h2>Habit Tracker</h2>
      <div style={{ marginBottom: "20px" }}>Total = {totalCount}</div>
    </>
  );
}

export default Header;
