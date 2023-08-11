import { Swap } from "../assets/icons";

export function ThemeButton() {
  function themeToggle() {
    const html = document.querySelector("html");

    if (html?.classList.contains("brutalist-theme")) {
      html.classList.remove("brutalist-theme");
    } else {
      html?.classList.add("brutalist-theme");
    }
  }

  return (
    <button onClick={themeToggle} className="theme-button">
      <img src={Swap} alt="" />
      Style
    </button>
  );
}
