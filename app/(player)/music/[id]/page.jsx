import React from 'react'

export default async function Page({params}) {

  let id = await params
  
  console.log(id)

  return (
    <div>
      
    </div>
  )
}
