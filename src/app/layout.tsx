import NavBar from "@/components/mg/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <header>
        <NavBar />
      </header>
      <main className="max-w-xl mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default RootLayout;
