import { Table } from '../../components/Table'
import { LOCAL_STORAGE_KEYS } from '../../models'

const Home: React.FC = () => {
  return (
    <div className='relative z-10 pt-20'>
      <Table tableSelected={LOCAL_STORAGE_KEYS.PEOPLE} />
    </div>
  )
}

export default Home
