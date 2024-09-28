import MDXContent from "@/mdx/Test.mdx";
import { Icons } from "../../components/icons";
import { Button, buttonVariants } from "../../components/ui/button";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
function Demo() {
  return (
    <div>
      <div>
        <div>
          <Button>wow</Button>
        </div>
        <div>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "h-8 w-8 px-0"
              )}
            >
              <Icons.gitHub className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </a>
        </div>
      </div>
      <MDXContent />
    </div>
  );
}

export default Demo;
