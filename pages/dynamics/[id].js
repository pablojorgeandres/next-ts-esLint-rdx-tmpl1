import React from 'react'
import { useRouter } from 'next/router'

const dynamicComponent = () => {
  const router = useRouter()
  return (
    <div>Este es un dynamicComponent: {router.query.id}</div>
  )
}

export default dynamicComponent