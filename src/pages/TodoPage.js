import React from "react";
import TodoBoard from "../components/TodoBoard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import api from "../utils/api";

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const getTasks = async () => {
    const response = await api.get("/tasks");
    console.log("response", response);
    setTodoList(response.data.data);
  };

  const addTask = async () => {
    if (!todoValue.trim()) {
      return;
    }
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("성공");
        setTodoValue("");
        getTasks();
        setIsFilled(false);
      } else {
        throw new Error("task can not be added");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event) => {
              const value = event.target.value;
              setTodoValue(value);
              setIsFilled(value.trim().length > 0);
            }}
          />
        </Col>

        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>
            추가
          </button>
        </Col>
        {!isFilled && (
          <p style={{ color: "red", marginTop: "3px" }}>할 일을 등록해주세요</p>
        )}
      </Row>

      <TodoBoard todoList={todoList} getTasks={getTasks} />
    </Container>
  );
};

export default TodoPage;
