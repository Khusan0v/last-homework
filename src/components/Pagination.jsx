import { Pagination } from 'flowbite-react';
import React, { useState } from 'react';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = 10; 

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(`You selected page ${pageNumber}!`);
  };

  const customPageStyle = (pageNumber) => {
    return pageNumber === currentPage
      ? 'bg-[rgba(255,255,255,0.4)] text-black'
      : 'bg-transparent text-gray-500 hover:text-black';
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          className={`px-4 py-2 mx-1 rounded-lg transition-colors ${customPageStyle(pageNumber)}`}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <div className="flex justify-center mt-4">
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageClick}>
        {renderPageNumbers()}
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
