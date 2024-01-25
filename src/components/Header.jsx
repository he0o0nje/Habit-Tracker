function Header({ totalCount }) {
  return (
    <>
      <h2>👀Habit Tracker👀</h2>
      <div style={{ marginBottom: "30px" }}>Total = {totalCount}</div>
      {/* 유지보수 측면에서 habits 배열을 받아 totalCount를 가져오는게 더 좋음 */}
    </>
  );
}

export default Header;
