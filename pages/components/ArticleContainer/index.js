import React from 'react'
import style from "./index.module.css"


const ArticleContainer = ({children}) => {
  return (
    <div className={style.grid}>
        {children}
    </div>
  )
}

export default ArticleContainer