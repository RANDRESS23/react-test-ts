import { useState } from 'react'
import { DataGrid, type GridRenderCellParams } from '@mui/x-data-grid'
import { PEOPLE } from '../../data/people'
import { type Person } from '../../models'
// interface Props {}

const Home: React.FC = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

  const handleChange = (personFocus: Person): void => {
    const isPersonSelected = selectedPeople.some((person) => person.id === personFocus.id)
    const newSelectedPeople = isPersonSelected
      ? selectedPeople.filter((person) => person.id !== personFocus.id)
      : [...selectedPeople, personFocus]

    setSelectedPeople(newSelectedPeople)
  }

  const columns = [
    {
      field: 'actions',
      headerName: '⭐',
      headerAlign: 'center',
      headerClassName: 'text-xl',
      // sortable: false,
      // filterable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <input
          type='checkbox'
          onChange={() => { handleChange(params.row) }}
          className='w-4 h-4 m-auto cursor-pointer'
        />
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      headerAlign: 'left',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      headerAlign: 'left',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      headerAlign: 'left',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]

  return (
    <div>
      <DataGrid
        className='bg-white border border-gray-200 rounded-md'
        rows={PEOPLE}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } }
        }}
        pageSizeOptions={[5]}
        getRowId={(row: any) => row.id}
      />
    </div>
  )
}

export default Home
