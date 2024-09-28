import { Separator } from "@/components/ui/separator";
import MDXContent from "@/pages/React.mdx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      React Introduction
      <Link to="/snippets">Snippets</Link>
      <Separator />
      <Link to="/mdx">mdx</Link>
      <MDXContent />
    </div>
  );
}

export default App;
