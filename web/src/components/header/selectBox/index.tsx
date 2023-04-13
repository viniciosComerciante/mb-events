import { IoLocationSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';


export function SelectBox() {
  return (
    <div className='flex items-center text-white hover:cursor-pointer'>
      <IoLocationSharp color='white' fill='white' size={20}/>
      <span className='ml-2 mr-2'>São Paulo</span>
      <IoIosArrowDown size={20}/>
    </div>
  );
}
