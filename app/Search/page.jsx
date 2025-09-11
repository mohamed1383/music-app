import React from 'react'
import Header from '../components/searchPage/header/header'
import Filters from '../components/searchPage/section/filters'
import Result from '../components/searchPage/searchResult/result'

export default function page() {
  return (
    <div>
      <Header></Header>
      <Filters></Filters>
      <Result></Result>
    </div>
  )
}
