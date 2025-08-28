import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo({ totalItems, rowsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  return (
    <Pagination className="w-full  flex justify-center items-center mt-2 border-t border-[#E5E7EB] ">
      <PaginationContent className="flex w-full items-center justify-between mt-4">

        <PaginationItem>
          <PaginationPrevious href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
          />
        </PaginationItem>

        <div className="flex items-center gap-6">

        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#"
              isActive={currentPage === i + 1}
              className={currentPage === i + 1 ? "  text-[var(--primary-color)] border-t-2 border-[var(--primary-color)] rounded-none "  : "text-black/70"}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(i + 1); // jump to clicked page
              }}
              >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        </div>

        <PaginationItem>
          <PaginationNext href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}
export default PaginationDemo;