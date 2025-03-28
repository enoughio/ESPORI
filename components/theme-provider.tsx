"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force dark mode as default
  React.useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

