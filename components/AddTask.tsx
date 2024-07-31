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
import { PlusIcon } from "./ui/Icons";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { v4 } from "uuid";
import { Task } from "@/types/globalinterfaces";
import { useToast } from "@/components/ui/use-toast";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const onSubmitHandler = () => {
    if (title.length === 0) {
      // Do not add task if title is empty
      toast({
        title: "Warning: Empty Title",
        description: "Title should not be empty",
      });
      return;
    }
    try {
      const newTask: Task = {
        id: v4(), //generate uuid
        title,
        description,
        completed: false,
        timestamp: new Date().toISOString(),
      };
      console.log(newTask); // add the new task to the main list of task
      toast({
        title: "Task: "+newTask.title,
        description: "Added successfully"
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
        <Button variant="outline" size="sm">
          <PlusIcon className="w-5 h-5" />
          <span>Add a Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-sm rounded-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Add a Task</DialogTitle>
          <DialogDescription className="text-center">
            Enter the details to add a new task. Click Add when you're done.
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
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
