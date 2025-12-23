
import Upload from '../../components/music/uploadButton/upload'
import Table from '../../components/usersPage/tables/table'
import Input from '../../components/usersPage/addUserInput/input'
import DeleteBox from '../../components/usersPage/deleteBox/deleteBox'

export default function Users() {
  return (
    <div className='w-full min-h-screen flex justify-center relative'>
      <Table></Table>

      <Input></Input>
      <DeleteBox></DeleteBox>
    </div>
  )
}
