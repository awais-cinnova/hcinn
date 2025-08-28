import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";
  import Links from "../Links";
  
  const MobileMenu = ({ isOpen, setIsOpen , className  , links}) => {
    const closeMenu = () => setIsOpen(false);
  
    return (
      <div className={className}>

        <Sheet open={isOpen} onOpenChange={setIsOpen} >
          <SheetTrigger asChild>
          <Button variant="hamburger" size="icon" className ='text-[20px] cursor-pointer'>☰</Button>
          </SheetTrigger>
    
          <SheetContent side="right" className="w-[250px] p-6">
              <SheetHeader className="text-center">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Select a page</SheetDescription>
              </SheetHeader>
    
              <Links onClick={closeMenu} links = {links}  className = "flex flex-col gap-4 mt-4 items-center"/>

            </SheetContent>
          </Sheet>
      </div>
    );
  };
  
  export default MobileMenu;