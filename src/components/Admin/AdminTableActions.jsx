import React from 'react'
import Search from '../HelpingUI/Search';
import { Button} from '../ui/button';
import Image from '../ui/image';
import AddOwnerModal from './AddOwnerModal';
import { useState } from 'react';
import AddHostelModal from '../Owner/AddHostelModal';




const AdminTableActions = ({role = "admin" , text = "Owner" , ownerId}) => {
const [isModalOpen, setIsModalOpen] = useState(false);

return (
<div className='flex items-end justify-center h-[100%] gap-2.5'>
      <Search/>
      
      <Button variant ="default" size="primarysize" className="text-black/60 bg-transparent border border-black/20 font-normal text-[16px] leading-[120%] tracking-[-0.05em] text-center flex justify-evenly px-4 py-[15px] cursor-pointer">
          Filter <Image src="filter-icon.svg" alt="Add" className="w-6 h-6" /> 
      </Button>
      
      <Button variant ="default" size="primarysize" className="text-[var(--primary-color)] border border-[var(--primary-color)] bg-transparent font-semibold text-[16px] leading-[120%] tracking-[-0.05em] text-center flex gap-3 cursor-pointer">
           <Image src="export-icon.svg" alt="Add" className="w-6 h-6" />Export
      </Button>
      
      <Button variant ="default" size="primarysize" onClick={() => setIsModalOpen(true)}
        className="text-white font-semibold text-[16px] leading-[120%] tracking-[-0.05em] text-center flex gap-3 cursor-pointer">
        <Image src="plus-icon.svg" alt="Add" className="w-6 h-6" />Add {text}
      </Button>

      {role==="admin" ? <AddOwnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      : <AddHostelModal ownerId={ownerId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
</div>

)
}

export default AdminTableActions
