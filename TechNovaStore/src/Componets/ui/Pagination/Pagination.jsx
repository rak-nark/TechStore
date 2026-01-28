import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  PaginationContainer,
  PageButton,
  PageButtonIcon,
  PageEllipsis,
} from "./Styled.Pagination";

const Pagination = ({ currentPage = 1, totalPages = 12, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const pagesSet = new Set();

    // Always show first page
    pages.push(
      <PageButton
        key={1}
        $active={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        1
      </PageButton>,
    );
    pagesSet.add(1);

    
    if (totalPages >= 2 && currentPage <= 2) {
      if (!pagesSet.has(2)) {
        pages.push(
          <PageButton
            key={2}
            $active={currentPage === 2}
            onClick={() => handlePageChange(2)}
          >
            2
          </PageButton>,
        );
        pagesSet.add(2);
      }
    }

    // Show current page and neighbors if not at start or end
    if (currentPage > 2 && currentPage < totalPages - 1) {
      if (currentPage > 3) {
        pages.push(<PageEllipsis key="ellipsis-start">...</PageEllipsis>);
      }

      pages.push(
        <PageButton
          key={currentPage}
          $active={true}
          onClick={() => handlePageChange(currentPage)}
        >
          {currentPage}
        </PageButton>,
      );
      pagesSet.add(currentPage);

      if (currentPage < totalPages - 2) {
        pages.push(<PageEllipsis key="ellipsis-end">...</PageEllipsis>);
      }
    }

    // Show last page if we have more than 2 pages
    if (totalPages > 2) {
      if (currentPage >= totalPages - 1 && !pagesSet.has(totalPages - 1)) {
        pages.push(
          <PageButton
            key={totalPages - 1}
            $active={currentPage === totalPages - 1}
            onClick={() => handlePageChange(totalPages - 1)}
          >
            {totalPages - 1}
          </PageButton>,
        );
        pagesSet.add(totalPages - 1);
      }

      if (!pagesSet.has(totalPages)) {
        pages.push(
          <PageButton
            key={totalPages}
            $active={currentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </PageButton>,
        );
      }
    }

    return pages;
  };

  return (
    <PaginationContainer>
      <PageButtonIcon
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <MdChevronLeft />
      </PageButtonIcon>

      {renderPageNumbers()}

      <PageButtonIcon
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <MdChevronRight />
      </PageButtonIcon>
    </PaginationContainer>
  );
};

export default Pagination;
