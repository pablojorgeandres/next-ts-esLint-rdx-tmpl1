import { createContext } from "react"

const ArticleContext = createContext({
    title: null,
    body: null,
})

export default ArticleContext