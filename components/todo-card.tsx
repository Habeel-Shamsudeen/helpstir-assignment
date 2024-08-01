"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types/globalinterfaces";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "./ui/Icons";
import { useState } from "react";
import UpdateTask from "./updateTask";
export default function TodoCard({
  task,
  setTodos,
}: {
  task: Task;
  setTodos: any;
}) {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);
  const handleToggleTaskCompletion = (id: string) => {
    setTodos((todos: [Task]) =>
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <Card
      className={`border-l-4 my-2 ${
        task.completed
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : "border-gray-300 dark:border-gray-600"
      }`}
    >
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => handleToggleTaskCompletion(task.id)}
          />
          <div
            className={`text-lg font-medium ${
              task.completed
                ? "line-through text-green-500 dark:text-green-400"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {task.title}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            setExpandedTaskId(expandedTaskId === task.id ? null : task.id)
          }
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Button>
      </CardHeader>
      {expandedTaskId === task.id && (
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{task.description}</p>
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date(task.timestamp).toLocaleString("en-us")}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <UpdateTask currentTask={task} setTodos={setTodos} />
          </div>
        </CardContent>
      )}
    </Card>
  );
}
