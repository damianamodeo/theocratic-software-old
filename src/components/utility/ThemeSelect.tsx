import Form from "@INPUTS/Form";
import Select from "@INPUTS/inputs/Select";
import { useTernaryDarkMode } from "usehooks-ts";

export default function ThemeSelect() {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  return (
    <div className={`dark:text-white flex`}>
      <Select
        options={[
          { id: 1, option: "light" },
          { id: 2, option: "dark" },
          { id: 3, option: "auto" },
        ]}
        onSelect={({ option }) => {
          const body = document.querySelector(".body");

          option === "light"
            ? body?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_LIGHT
              )
            : option === "dark"
            ? body?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_DARK
              )
            : null;

          const light = document.querySelector("#light-theme");
          const dark = document.querySelector("#dark-theme");
          light?.setAttribute(
            "content",
            import.meta.env.VITE_APP_THEME_COLOR_LIGHT
          );
          dark?.setAttribute(
            "content",
            import.meta.env.VITE_APP_THEME_COLOR_DARK
          );
          option === "light"
            ? dark?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_LIGHT
              )
            : option === "dark"
            ? light?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_DARK
              )
            : null;

          setTernaryDarkMode(
            option === "auto" ? "system" : (option as TernaryDarkMode)
          );
        }}
        initialValue={{
          id: 0,
          option: `${ternaryDarkMode === "system" ? "auto" : ternaryDarkMode}`,
        }}
      >
        Theme
      </Select>
    </div>
  );
}
