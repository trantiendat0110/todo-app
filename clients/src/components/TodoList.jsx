import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";
import FormAddTodo from "./FormAddTodo";
import Text from "./Text";
import ButtonClearTodo from "./ButtonClearTodo";
import Filler from "./Filler";

export default function TodoList() {
  const [data, setData] = useState([]);
  const TodoList = {
    fetchData: async () => {
      await axios.get("http://127.0.0.1:8000/api/todo/").then((res) => {
        setData(res.data);
      });
    },
    addTodo: async (data) => {
      await axios.post("http://127.0.0.1:8000/api/todo", data).then((res) => {
        setData(res.data.data);
      });
    },
    deleteTodo: async (id) => {
      await axios.delete("http://127.0.0.1:8000/api/todo/" + id).then((res) => {
        setData(res.data.data);
      });
    },
    clearAll: async () => {
      await axios
        .post("http://127.0.0.1:8000/api/todo/delete-all")
        .then((res) => {
          setData(res.data.data);
        });
    },
    filler: async (status) => {
      if (status < 4) {
        await axios
          .post("http://127.0.0.1:8000/api/todo/filler/" + status)
          .then((res) => {
            setData(res.data.data);
          });
      } else {
        TodoList.fetchData();
      }
    },
    checkedTodo: async (id) => {
      await axios
        .get("http://127.0.0.1:8000/api/todo/" + id + "/edit")
        .then((res) => {
          setData(res.data.data);
        });
    },
  };
  useEffect(() => {
    TodoList.fetchData();
  }, []);
  return (
    <div className="h-full flex flex-col justify-between">
      <FormAddTodo fc={TodoList}></FormAddTodo>
      <Filler filler={TodoList.filler}></Filler>
      <hr />
      <div className="flex-1 overflow-y-scroll scrollbar-none mt-5">
        <Todo data={data} fc={TodoList}></Todo>
      </div>
      <hr className="shadow-2xl" />
      <div className="flex justify-between mt-2 h-1/6 pb-10 ">
        <Text count={data}></Text>
        <ButtonClearTodo fc={TodoList.clearAll}></ButtonClearTodo>
      </div>
    </div>
  );
}
