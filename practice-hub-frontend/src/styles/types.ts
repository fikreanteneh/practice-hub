

type Theme = {

    type: string,
    change: () => void
}

type ThemeProp = {
    theme: Theme
}

export type {Theme, ThemeProp} 