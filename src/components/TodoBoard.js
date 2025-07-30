import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, getTasks }) => {
  const handleLogout = () => {
    // 로컬스토리지 토큰 제거 예시
    sessionStorage.removeItem("token");
    // 로그인 페이지로 리다이렉트 (React Router 기준)
    window.location.href = "/login"; // 또는 navigate("/login") if using react-router
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Todo List</h2>
        <button
          onClick={handleLogout}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          로그아웃
        </button>
      </div>

      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          <TodoItem item={item} key={index} getTasks={getTasks} />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
