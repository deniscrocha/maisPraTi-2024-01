import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 50px auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const TaskItem = styled.li`
  background: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
  }

  button {
    margin-left: 10px;
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: darkred;
    }
  }
`;

const EditInput = styled.input`
  margin-left: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

function loadTasks() {
  if (!localStorage.getItem("tasks")) {
    createTasksLocalStorage([]);
  }
  return JSON.parse(localStorage.getItem("tasks"));
}
function createTasksLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  if (!localStorage.getItem("id")) {
    localStorage.setItem("id", 1);
  }
}
function getId() {
  if (!localStorage.getItem("id")) {
    createTasksLocalStorage([]);
  }
  const lastId = JSON.parse(localStorage.getItem("id"));
  localStorage.setItem("id", Number(lastId) + 1);
  return lastId;
}

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(loadTasks());
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");

  const taskFactory = (taskName) => {
    const id = getId();
    return { text: taskName, id: id };
  };
  const addTask = () => {
    const newTask = taskFactory(task);
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (idToDelete) => {
    setTasks(
      tasks.filter(t=>t.id !== idToDelete)
    );
  };
  const handleChange = (id, text) =>{
    setEditingTaskId(id);
    setEditingTaskText(text);
  }
  const handleOnBlurChange = () =>{
    tasks.forEach(task => {
      if(task.id === editingTaskId){
        task.text = editingTaskText;
      }
    });
    setEditingTaskText("");
    setEditingTaskId(null);

  }
  useEffect(() => {
    createTasksLocalStorage(tasks);
  }, [tasks]);
  return (
    <Container>
      <Title>Todo App</Title>
      <Input
        type="text"
        value={task}
        placeholder="Add a new task"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={handleOnBlurChange}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => handleChange(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoApp;
