import { Button } from "@/components/ui/button";
import MDXContent from "@/mdx/React.mdx";
import { Link } from "react-router-dom";

const routes = ["test", "mdx", "demo"];

function App() {
  return (
    <div>
      {routes.map((route) => (
        <Link key={route} to={`/${route}`}>
          <Button variant="link">{route}</Button>
        </Link>
      ))}
      <MDXContent />
    </div>
  );
}

export default App;
