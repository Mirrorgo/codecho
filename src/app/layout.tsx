import NavBar from "@/components/mg/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="min-h-screen">
        <NavBar />
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default RootLayout;
