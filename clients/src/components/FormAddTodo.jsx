import React, { useEffect, useRef, useState } from "react";

export default function FormAddTodo(props) {
  const [todo, setTodo] = useState("");
  const btn_add_todo = useRef();
  const value_todo = useRef();
  const statusElement = useRef()
  useEffect(() => {
    btn_add_todo.current.onclick = (e) => {
      e.preventDefault();
      props.fc.addTodo({
        id: Math.floor(Math.random() * 999),
        fullName: todo,
        status: statusElement.current.value,
      });
      setTodo("");
      value_todo.current.focus();
    };
  }, [todo]);

  return (
    <div>
      <form className="flex justify-between">
        <input
          ref={value_todo}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="rounded border outline-none p-1 px-2 my-4 mr-2 w-full"
          placeholder="what todo ?"
          type="text"
        />
        <div className="m-auto p-2">
          <select className="outline-none border p-1 rounded" ref={statusElement} name="status">
            <option className="" value={0}>Low</option>
            <option className="text-yellow-600" value={1}>Medium</option>
            <option className="text-red-600" value={2}>Hight</option>
          </select>
        </div>
        <button
          ref={btn_add_todo}
          className="p-2 bg-violet-600 text-sm h-1/2 m-auto rounded text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}
