import React from 'react'
import MusicTable from '../../components/music/music_table/musicTable'
import Input from '../../components/music/addMusicInput/input'
import DeleteBox from '../../components/music/deleteBox/deleteBox'

export default function page() {
  return (
    <div>
      <MusicTable />

      <Input></Input>
      <DeleteBox></DeleteBox>
    </div>
  )
}
