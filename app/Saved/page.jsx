import React from 'react'
import Header from '../components/savedMusic/header/header'
import Filter from '../components/savedMusic/filter/filter'
import Result from '../components/savedMusic/result/reuslt'

export default function page() {
  return (
    <div>
        <Header></Header>
        <Filter></Filter>
        <Result></Result>
    </div>
  )
}
