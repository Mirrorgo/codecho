import { ChangeEvent } from "react";
import { debounce } from "./helper";
import { Input } from "@/components/ui/input";

const debouncedSearch = debounce((searchTerm) => {
  console.log("Searching for:", searchTerm);
}, 300);

function DebounceComponent() {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return <Input type="text" onChange={handleInputChange} className="w-36" />;
}
export { DebounceComponent };
