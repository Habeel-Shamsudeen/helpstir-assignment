"use client";
import Appbar from "@/components/Appbar";
import { SearchBar } from "@/components/ui/searchbar";
import TodoCard from "@/components/todo-card";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";
import todoList from '../public/todos.json'

export default function Home() {
  const [filter, setFilter] = useState("");
  const [todos,setTodos] = useState(todoList) // initial todos from todos.json
  const debouncedValue = useDebounce(filter, 400);
  useEffect(() => {
    console.log(debouncedValue); // fetch todos which has the debouncedValue string
  }, [debouncedValue]);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Appbar setTodos={setTodos}/>
      <div className="flex flex-col max-w-lg justify-center py-24">
        <SearchBar setFilter={setFilter} />
        {todos.map((task)=>(
          <TodoCard task={task} setTodos={setTodos}/>
        ))}
      </div>
    </div>
  );
}
