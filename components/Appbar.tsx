import AddTask from "./AddTask";

export default function Appbar({ setTodos }: { setTodos: any }) {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-black border-b-2 border-slate-50 px-4 md:px-6 fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-xl text-slate-50 font-bold">Todo App</span>
      </div>
      <AddTask setTodos={setTodos} />
    </header>
  );
}
