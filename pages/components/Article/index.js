import React from 'react'
import style from "./index.module.css";

const Article = () => {
  return (
    <>
        <a href="/posts/first-post" className={style.card}>
            <h3>Read &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
        </a>    
    </>
  )
}

export default Article