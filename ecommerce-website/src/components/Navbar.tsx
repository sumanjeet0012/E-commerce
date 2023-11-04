import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser,AiOutlineShoppingCart } from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'
import CartCountBadge from './CartCountBadge'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-green-400 ">
        <div className="container ">
            <div className="flex justify-between items-center py-4">
                <SiFlipkart className='lg:hidden icon_wrapper mr-4 ' />
                <h1 className="  hidden lg:block text-4xl font-medium min-w-[300px]">E-commerce App</h1>
                <div className="relative w-full mr-4">
                    <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product ..."/> 
                    <BsSearch className="absolute top-0 right-0 mt-4 mr-5  text-grey-500" size={20} />
                </div>

                <div className="flex gap-4 ">
                    <div className='icon_wrapper'>
                        <AiOutlineUser  />
                    </div>
                    <div className='icon_wrapper relative'>
                        <AiOutlineShoppingCart  />
                        <CartCountBadge size="w-[25px] h-[25px]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar