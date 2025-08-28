import { Input } from "@/components/ui/input"
import Image from '../ui/image' // Assuming this is a valid image component

const Search = ({ searchTerm, setSearchTerm , classname }) => {
  return (
    <div className="relative max-w-sm  h-[100%]">
      <Input    type="text" placeholder="Search..." className="h-[100%] pl-8 font-normal text-base leading-[120%] tracking-[-0.05em] border border-black/20"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>

      <div className='absolute top-1/2 -translate-y-1/2 left-[6px] w-[24px] h-[24px]'>
        <Image  src="search-icon.svg" alt="Search" className="  w-5 h-5 pointer-events-none"/>
      </div>
    </div>
  )
}

export default Search
