import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center px-5 py-5 sm:px-10'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="apple" width={14} height={14}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map(
                (nav) => (
                    <div key={nav} className='px-5 cursor-pointer text-sm text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                )
            )}
        </div>

        <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt="search" width={14} height={14}/>
            <img src={bagImg} alt="bag" width={14} height={14}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
