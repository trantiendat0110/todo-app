import React, { useRef } from "react";

export default function ButtonClearTodo(props) {
  const btn_clearALl = useRef();
  const handleClearAll = () => {
    if (window.confirm('xoa tat ca ?')) {
      props.fc();
    }
  }
  return (
    <button
      ref={btn_clearALl}
      onClick={handleClearAll}
      className="bg-violet-600 text-white p-2 rounded font-medium"
    >
      Clear All
    </button>
  );
}
