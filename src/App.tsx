import { NavBar } from './components'
import { Home } from './pages'
import './App.css'

export default function App (): JSX.Element {
  return (
    <div>
      <NavBar />
      <main className='w-3/4 m-auto mt-20'>
        <Home />
      </main>
    </div>
  )
}
