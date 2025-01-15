export type HeroProps = {
    festivalName: string
    bgUrl: string
}

export type CarouselArr = {
    index: number
    festivalName: string
    bgUrl: string
}

export type BrowseProps = {
    category: string
    categoryImg: string
}

export type BrowseArr = {
    index: number
    category: string
    categoryImg: string
}

export type State = {
    errors?: {
        email?: string[]
        password?: string[]
    }
    message?: string | null
}