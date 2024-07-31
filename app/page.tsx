'use client'
import Appbar from "@/components/Appbar";
import { SearchBar } from "@/components/ui/searchbar";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";
import { fileURLToPath } from "url";

export default function Home() {
  const [filter,setFilter] =useState('')
  const debouncedValue = useDebounce(filter,400);
  useEffect(()=>{
    console.log(debouncedValue)
  },[debouncedValue])
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Appbar/>
      <div className="flex justify-center py-24">
        <SearchBar setFilter={setFilter}/>
      </div>
    </div>
  );
}