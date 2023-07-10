import { type GridRenderCellParams, DataGrid, type GridColDef } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { LOCAL_STORAGE_KEYS, type Person } from '../../models'
import { removeFavorite, addFavorite } from '../../redux/states/favorites'
import { type AppStore } from '../../redux/store'

interface Props {
  tableSelected: string
}

const Table: React.FC<Props> = ({ tableSelected }) => {
  const favoritePeople: Person[] = useSelector((state: AppStore) => state.favorites)
  const totalPeople: Person[] = useSelector((state: AppStore) => state.people)
  const dispatch = useDispatch()

  const handleChange = (personFocus: Person): void => {
    const isPersonSelected = favoritePeople.some((person) => person.id === personFocus.id)

    isPersonSelected
      ? dispatch(removeFavorite({ favoritePersonId: personFocus.id }))
      : dispatch(addFavorite({ favoritePerson: personFocus }))
  }

  const FIRST_COLUMNS = {
    PEOPLE: ({ params }: { params: GridRenderCellParams }) => (
      <input
        type='checkbox'
        checked={favoritePeople.some((person) => person.id === params.row.id)}
        onChange={() => { handleChange(params.row) }}
        className='w-4 h-4 m-auto cursor-pointer'
      />
    ),
    FAVORITES: ({ params }: { params: GridRenderCellParams }) => (
      <button
      className='text-3xl'
        onClick={() => dispatch(removeFavorite({ favoritePersonId: params.id }))}
      >
        🗑
      </button>
    )
  }

  const HEADER_NAME_FIRST_COLUMN = tableSelected === LOCAL_STORAGE_KEYS.PEOPLE ? '⭐' : 'Remove'
  const CLASS_NAME_FIRST_COLUMN = tableSelected === LOCAL_STORAGE_KEYS.PEOPLE ? 'text-xl' : 'uppercase'
  const ALIGN_FIRST_COLUMN = tableSelected === LOCAL_STORAGE_KEYS.PEOPLE ? 'center' : 'left'
  const CELL_CLASS_NAME_FIRST_COLUMN = tableSelected === LOCAL_STORAGE_KEYS.PEOPLE ? 'text-center' : 'translate-x-1/3'

  const columns: Array<GridColDef<Person>> = [
    {
      field: 'actions',
      headerName: HEADER_NAME_FIRST_COLUMN,
      headerClassName: CLASS_NAME_FIRST_COLUMN,
      headerAlign: ALIGN_FIRST_COLUMN,
      cellClassName: CELL_CLASS_NAME_FIRST_COLUMN,
      sortable: false,
      filterable: false,
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        if (tableSelected === LOCAL_STORAGE_KEYS.PEOPLE) {
          return FIRST_COLUMNS.PEOPLE({ params })
        }

        return FIRST_COLUMNS.FAVORITES({ params })
      }
    },
    {
      field: 'name',
      headerName: 'Name',
      headerClassName: 'uppercase',
      headerAlign: 'left',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Category',
      headerClassName: 'uppercase',
      headerAlign: 'left',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      headerClassName: 'uppercase',
      headerAlign: 'left',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      headerClassName: 'uppercase',
      headerAlign: 'left',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ]

  return (
    <DataGrid
      className='bg-white border border-gray-600 rounded-md'
      rows={tableSelected === LOCAL_STORAGE_KEYS.PEOPLE ? totalPeople : favoritePeople}
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

export default Table
