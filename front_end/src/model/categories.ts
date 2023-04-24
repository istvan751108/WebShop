import { Category } from "./category"

export type res = {
    errorMessage: string,
    data: Category[]
}

export interface Categories {
    categories: res
}