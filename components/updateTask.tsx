"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { FilePenIcon } from "./ui/Icons";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Task } from "@/types/globalinterfaces";
import { useToast } from "@/components/ui/use-toast";

export default function UpdateTask({currentTask,setTodos}:{currentTask:Task,setTodos:any}) {
  const [title, setTitle] = useState(currentTask.title);
  const [description, setDescription] = useState(currentTask.description);
  const { toast } = useToast();
  const onSubmitHandler = () => {
    if (title.length === 0) { // cannot update task if title is empty
      toast({
        title: "Warning: Empty Title",
        description: "Title should not be empty",
      });
      return;
    }
    try {
      const updatedTask: Task = {
        id: currentTask.id, //generate uuid
        title,
        description,
        completed: currentTask.completed,
        timestamp: new Date().toISOString(),
      };
      setTodos((todos:[Task])=> todos.map((task) =>
        task.id === currentTask.id ? { ...task, title:updatedTask.title, description:updatedTask.description } : task
      ))
      toast({
        title: "Task: "+updatedTask.title,
        description: "Updated successfully"
      });
      setTitle("");
      setDescription("");
    } catch (error) {
      toast({
        description: "Something Went Wrong!",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <FilePenIcon className="w-4 h-4" />
          <span>Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-sm rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Edit Task</DialogTitle>
          <DialogDescription className="text-center">
            Edit the details the current task. Click Save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-10">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Go to the Gym"
              value={title}
              required={true}
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Hit gym at 9:00 am today..."
              value={description}
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full" onClick={onSubmitHandler}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
