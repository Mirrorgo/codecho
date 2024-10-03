import NavBar from "@/components/mg/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

// 路由与展示文字的映射
const routes = [
  { path: "react", displayText: "React" },
  { path: "curring", displayText: "柯里化" },
  { path: "hoc", displayText: "高阶组件" },
  { path: "hooks", displayText: "hooks" },
  { path: "fetch", displayText: "fetch" },
  { path: "debug", displayText: "调试" },
];

function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <header>
        <NavBar />
      </header>
      <main className="max-w-xl mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        {routes.map(({ path, displayText }) => (
          <NavLink key={path} to={`/${path}`}>
            {({ isActive }) => (
              <Button
                variant="link"
                className={
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                }
              >
                {displayText}
              </Button>
            )}
          </NavLink>
        ))}
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default RootLayout;
