import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "./Icons"

export function SearchBar({setFilter}:{setFilter:any}) {
  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <Input
        type="search"
        placeholder="Search..."
        className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
        onChange={(e)=>setFilter(e.target.value)}
      />
      <Button
        type="submit"
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

