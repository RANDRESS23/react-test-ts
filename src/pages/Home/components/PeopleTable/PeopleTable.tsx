import { type GridRenderCellParams, DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { type Person } from '../../../../models'
import { removeFavorite, addFavorite } from '../../../../redux/states/favorites'
import { type AppStore } from '../../../../redux/store'

const PeopleTable: React.FC = () => {
  const favoritePeople: Person[] = useSelector((state: AppStore) => state.favorites)
  const totalPeople: Person[] = useSelector((state: AppStore) => state.people)
  const dispatch = useDispatch()

  const handleChange = (personFocus: Person): void => {
    const isPersonSelected = favoritePeople.some((person) => person.id === personFocus.id)

    isPersonSelected
      ? dispatch(removeFavorite({ favoritePersonId: personFocus.id }))
      : dispatch(addFavorite({ favoritePerson: personFocus }))
  }

  const columns = [
    {
      field: 'actions',
      headerName: '⭐',
      headerClassName: 'text-xl',
      sortable: false,
      filterable: false,
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <input
          type='checkbox'
          checked={favoritePeople.some((person) => person.id === params.row.id)}
          onChange={() => { handleChange(params.row) }}
          className='w-4 h-4 m-auto cursor-pointer'
        />
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      headerClassName: 'uppercase',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]

  return (
    <DataGrid
      className='bg-white border border-gray-200 rounded-md'
      rows={totalPeople}
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
  )
}

export default PeopleTable
