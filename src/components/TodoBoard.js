import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, getTasks }) => {
  

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
