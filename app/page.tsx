"use client";
import Appbar from "@/components/Appbar";
import { SearchBar } from "@/components/ui/searchbar";
import TodoCard from "@/components/todo-card";
import { useDebounce } from "@/lib/hooks";
import { useEffect, useState } from "react";
import todoList from "../public/todos.json";
import { Task } from "@/lib/globalinterfaces";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [filter, setFilter] = useState<string>("");
  const searchParams = useSearchParams();

  // initial todos from todos.json
  const [todos, setTodos] = useState<Task[]>(todoList);

  //set filter based on query params
  useEffect(() => {
    const search = searchParams.get("search");
    setFilter(search || "");
  }, [searchParams]);

  // debouncing to make search less heavy on the backend
  const debouncedValue = useDebounce(filter, 150);

  // filter the task to only which contains the debouncedFilter string
  let filteredTasks = todos.filter(
    (task) =>
      task.title.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      task.description.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Appbar setTodos={setTodos} />
      <div className="flex justify-center w-full">
        <div className="flex flex-col mt-24 w-full max-w-md items-center lg:max-w-xl">
          <SearchBar />
          <div className="w-full max-w-md items-center lg:max-w-xl">
            {filteredTasks
              .sort((a: any, b: any) => a.completed - b.completed) // sort task to make not completed task on top
              .map((task) => (
                <TodoCard task={task} setTodos={setTodos} key={task.id}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
