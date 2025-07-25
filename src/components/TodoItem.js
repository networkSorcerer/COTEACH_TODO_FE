import React, { useEffect, useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";
import debounce from "lodash.debounce";

const TodoItem = ({ item, getTasks }) => {
  const [taskInputs, setTaskInputs] = useState({});
  const [taskCompletion, setTaskCompletion] = useState({});

  const deleteTodo = async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    if (response.status === 200) {
      getTasks();
    }
  };

  // 디바운스된 업데이트 함수
  const debouncedUpdate = useCallback(
    debounce(async (id, task, isComplete) => {
      const response = await api.put(`/tasks/${id}`, {
        task,
        isComplete,
      });
      if (response.status === 200) {
        getTasks();
      }
    }, 500), // 500ms 후에 실행
    []
  );

  const handleInputChange = (id, value) => {
    setTaskInputs((prev) => ({ ...prev, [id]: value }));
    debouncedUpdate(id, value, taskCompletion[id] ?? item.isComplete);
  };

  const toggleComplete = (id) => {
    const newValue = !(taskCompletion[id] ?? item.isComplete);
    setTaskCompletion((prev) => ({ ...prev, [id]: newValue }));
    debouncedUpdate(id, taskInputs[id] ?? item.task, newValue);
  };

  return (
    <Row>
      <Col xs={12}>
        <div className="todo-item">
          <div className="todo-content">
            <input
              type="text"
              className="px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="할 일을 입력하세요..."
              value={taskInputs[item._id] ?? item.task}
              onChange={(e) => handleInputChange(item._id, e.target.value)}
            />
          </div>

          <div>
            <button
              className="button-delete"
              onClick={() => deleteTodo(item._id)}
            >
              삭제
            </button>
            <button
              className="button-delete"
              onClick={() => toggleComplete(item._id)}
            >
              {taskCompletion[item._id] ?? item.isComplete
                ? "완료됨"
                : "미완료"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
