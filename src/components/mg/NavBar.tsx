import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify, Github, Languages, Linkedin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import NavItem from "./nav-item";
import { Link } from "react-router-dom";

// 导航项数据
const navItems: { label: string; href: string }[] = [
  // { label: "Home", href: "#home" }, // 关键成就的数据，以后多了放放 | 近期动向 | 超级简短介绍
  { label: "Snippets", href: "/" },
  // { label: "Snippets", href: "/snippets" },
  // { label: "Experience", href: "#experience" },
];

const moreNavItem = {
  label: "Mirrorgo",
  href: "https://mirrorgo.unimelb.top/",
};

const BrandLogo = () => (
  <Link to="/">
    <div className="text-xl font-bold cursor-pointer flex items-center mt-1">
      {/* 暂时没有icon */}
      {/* <img src={"/logo.png"} alt={"logo"} width={30} height={30} /> */}
      <div>Codecho</div>
    </div>
  </Link>
);

function NavBar() {
  return (
    <>
      <nav className="sticky top-0 shadow-md z-10 h-10 w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-100">
        <div className="hidden lg:flex justify-between  ">
          <div className="flex">
            <BrandLogo />
            <div className="flex justify-around items-center mx-10 w-fit gap-3">
              {navItems.map((item, index) => (
                <Fragment key={item.href}>
                  {index > 0 && (
                    <Separator orientation="vertical" className="h-6" />
                  )}
                  <NavItem label={item.label} href={item.href} />
                </Fragment>
              ))}
              {/* 更多的链接 */}
              <Separator orientation="vertical" className="h-6" />
              <NavItem label={moreNavItem.label} href={moreNavItem.href} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {/* TODO: 改成实际仓库和star数 */}
              <a
                href="https://github.com/Mirrorgo/codecho"
                target="_blank"
                rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
              >
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Github size={18} />
                </Button>
              </a>
            </div>
            <Separator orientation="vertical" className="h-5" />
            <Button size="icon" variant="ghost">
              <Languages />
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <BrandLogo />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* 增加一个动态效果,三横转成X的效果 */}
              <div className="flex justify-center items-center h-10 w-10 cursor-pointer">
                <AlignJustify />
              </div>
            </DropdownMenuTrigger>
            {/* <DropdownMenuPortal> */}
            {/* next这里不会有样式缺失，但是vite的会有样式缺失 */}
            <DropdownMenuContent className="px-3">
              {navItems.map((item, idx) => (
                <DropdownMenuItem asChild key={idx}>
                  <NavItem
                    key={item.href}
                    label={item.label}
                    href={item.href}
                  />
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <NavItem label={moreNavItem.label} href={moreNavItem.href} />
              </DropdownMenuItem>
              <div className="flex">
                <a
                  href="https://github.com/Mirrorgo/codecho"
                  target="_blank"
                  rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
                >
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Github size={18} />
                  </Button>
                </a>
              </div>
              <div className="flex justify-evenly">
                <ModeToggle />
                <Button size="icon" variant="ghost">
                  <Languages />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
