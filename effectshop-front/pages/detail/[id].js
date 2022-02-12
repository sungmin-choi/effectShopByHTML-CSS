import React from 'react'
import { useRouter } from 'next/router'

const Detail= () => {
  const router  = useRouter();
  const {id} = router.query;
  
  return (
    <h1>Detail:{id}</h1>
  )
}

export default Detail