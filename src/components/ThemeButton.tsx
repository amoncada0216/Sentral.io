import { Button } from "./button";
import { useTheme } from "../providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button className="rounded-full" onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}