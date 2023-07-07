import { DataGrid, type GridRenderCellParams } from '@mui/x-data-grid'
import { PEOPLE } from '../../data/people'
// interface Props {}

const Home: React.FC = () => {
  const columns = [
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
