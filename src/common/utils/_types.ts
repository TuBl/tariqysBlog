import { CSSProperties, PropsWithChildren, FormEvent, RefObject } from "react"

export type themeType = "dark" | "light" | null
export interface HeaderInt {
  headerStyle: CSSProperties
  mTheme: themeType
  handleTheme: (e: any) => void
}
