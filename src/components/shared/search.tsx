import { Search as SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="relative flex justify-center items-center">
      <SearchIcon className="top-2.5 left-2.5 absolute w-4 h-4 text-muted-foreground" />
      <Input type="search" placeholder="Buscar torre..." className="pl-8" />
    </div>
  );
};
export default Search;
