import Form from "@INPUTS/Form";
import { useTernaryDarkMode } from "usehooks-ts";

export default function ThemeSelect() {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  type TernaryDarkMode = typeof ternaryDarkMode;

  return (
    <div className={`dark:text-white flex`}>
      <div className={`text-xl my-auto pr-2`}>Theme:</div>
      <Form.Select
        options={["light", "dark", "auto"]}
        onChange={(ev) => {

          const body = document.querySelector(".body");

          ev === "light"
            ? body?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_LIGHT
              )
            : ev === "dark"
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
          ev === "light"
            ? dark?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_LIGHT
              )
            : ev === "dark"
            ? light?.setAttribute(
                "content",
                import.meta.env.VITE_APP_THEME_COLOR_DARK
              )
            : null;

          setTernaryDarkMode(
            ev === "auto" ? "system" : (ev as TernaryDarkMode)
          );
        }}
        value={ternaryDarkMode === "system" ? "auto" : ternaryDarkMode}
        width={"sm"}
        placeholder="theme"
      ></Form.Select>
    </div>
  );
}
