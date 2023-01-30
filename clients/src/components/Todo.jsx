import { useEffect } from "react";

export default function Todo(props) {
  useEffect(() => {
    const btn_edit_todos = document.querySelectorAll(".btn_edit_todo");
    if (btn_edit_todos) {
      btn_edit_todos.forEach((item) => {
        item.onclick = (e) => {
          console.log(e.target.value);
          props.fc.checkedTodo(e.target.value);
        };
      });
    }
  });
  const handleDelete = (e) => {
    props.fc.deleteTodo(e.target.value);
  };
  const handleRenderTodo = (status, todo) => {
    if (status == 3) {
      return (
        <li
          value={todo.status}
          className="text-white w-full decoration-slice line-through bg-slate-500 opacity-30 p-2 m-2 rounded todoElement list-none"
        >
          {todo.fullName}
          <button
            onClick={handleDelete}
            value={todo.id}
            className="btn_delete hover:cursor-pointer font-bold text-sm float-right text-white"
          >
            delete
          </button>
        </li>
      );
    }
    if (status == 2) {
      return (
        <li
          value={todo.status}
          className="text-white w-full bg-red-500 p-2 m-2 rounded todoElement list-none"
        >
          {todo.fullName}
          <button
            onClick={handleDelete}
            value={todo.id}
            className="btn_delete hover:cursor-pointer font-bold text-sm float-right text-white"
          >
            delete
          </button>
        </li>
      );
    }
    if (status == 1) {
      return (
        <li
          value={todo.status}
          className="text-white w-full bg-yellow-500 p-2 m-2 rounded todoElement list-none"
        >
          {todo.fullName}
          <button
            onClick={handleDelete}
            value={todo.id}
            className="btn_delete hover:cursor-pointer font-bold text-sm float-right text-white"
          >
            delete
          </button>
        </li>
      );
    } else {
      return (
        <li
          value={todo.status}
          className="text-white w-full bg-slate-400 p-2 m-2 rounded todoElement list-none"
        >
          {todo.fullName}
          <button
            onClick={handleDelete}
            value={todo.id}
            className="btn_delete hover:cursor-pointer font-bold text-sm float-right text-white"
          >
            delete
          </button>
        </li>
      );
    }
  };
  let data = props.data;
  return (
    <>
      {data
        ? data.map((todo) => {
            return (
              <div key={todo.id} className="flex todo justify-between relative">
                {handleRenderTodo(todo.status, todo)}
                <p className="btn_update absolute top-2 right-0 m-auto bg-green-500 text-base text-white rounded">
                  <li
                    value={todo.id}
                    className="p-3 px-4 btn_edit_todo fa-solid fa-check"
                  ></li>
                </p>
              </div>
            );
          })
        : "loi"}
    </>
  );
}
