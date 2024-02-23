/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"

const initialState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}) {
    const [theme, setTheme] = useState(
        () => (localStorage.getItem(storageKey)) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark", "blue")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : window.matchMedia("(prefers-color-scheme: light)")
                    .matches ? "light" : window.matchMedia("(prefers-color-scheme: blue)")
                        .matches ? "blue" : "system"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
