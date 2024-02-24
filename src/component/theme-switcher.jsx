import { useEffect } from "react"
import { useTheme } from "./theme-provider"

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const body = document.querySelector('body');

            body.setAttribute('theme', theme);
        }
    }, [theme])

    return (
        <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)} className="border rounded px-4 py-2 m-2 text-black z-50">
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="blue">Blue</option>
        </select>
    )
}

export default ThemeSwitcher