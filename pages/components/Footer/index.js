import React from 'react'

import style from "./index.module.css"

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={style.a}
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={style.logo} />
        </a>
      </footer>
    </>
  )
}

export default Footer