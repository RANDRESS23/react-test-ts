import { Table } from '../Table'
import { LOCAL_STORAGE_KEYS } from '../../models'
import { useState } from 'react'

const NavBar: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShow = (): void => {
    setShowModal(true)
  }

  const handleClose = (): void => {
    setShowModal(false)
  }

  return (
    <>
      <header className="w-full fixed z-30 top-0 border-b border-white">
        <nav className="bg-[#24527a] h-12 ">
          <ul className="h-full flex justify-center items-center">
            <li className="h-full">
              <a href="/" className="h-full flex justify-center items-center text-lg text-white font-bold px-5 hover:bg-[#5dacbd] transition duration-300">REACT-TEST-TS</a>
            </li>
            <li className="h-full">
              <button
                onClick={handleShow}
                className="h-full text-white px-5 font-bold hover:bg-[#f23557] transition duration-300"
              >
                Favorites ❤
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {
        showModal && (
          <div className='absolute z-50 bg-black/50 backdrop-blur-sm h-screen w-full flex justify-center items-center'>
            <div className='w-3/4 m-auto flex flex-col justify-center items-center gap-3'>
              <Table tableSelected={LOCAL_STORAGE_KEYS.FAVORITES} />
              <button
                onClick={handleClose}
                className='bg-[#f23557] text-white font-bold text-lg px-8 py-2 rounded-md shadow-md hover:bg-[#dd2043] transition duration-300'
              >
                CLOSE
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default NavBar
