interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <header className="w-full fixed top-0 border-b border-white">
      <nav className="bg-[#24527a] h-12 ">
        <ul className="h-full flex justify-center items-center">
          <li className="h-full">
            <a href="/" className="h-full flex justify-center items-center text-lg text-white font-bold px-5 hover:bg-[#5dacbd] transition duration-300">REACT-TEST-TS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
