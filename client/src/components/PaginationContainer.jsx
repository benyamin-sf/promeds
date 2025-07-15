import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/PageBtnContainer';

export default function PaginationContainer({
  queryClient,
  queryKey,
  numberOfPages,
  currentPage,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const onPageChange = (pageNum) => {
    queryClient?.invalidateQueries([queryKey]);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNum);
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      preventScrollReset: true,
    });
  };

  const addPaginationBtn = (pageNum, activePage) => {
    return (
      <button
        key={pageNum}
        type='button'
        className={`btn page-btn ${activePage ? 'active' : undefined}`}
        onClick={() => onPageChange(pageNum)}
      >
        {pageNum < 10 ? `0${pageNum}` : pageNum}
      </button>
    );
  };

  const renderPagination = () => {
    const pageButtons = [];

    // lastBtn
    if (currentPage <= numberOfPages) {
      pageButtons.push(
        addPaginationBtn(numberOfPages, currentPage === numberOfPages)
      );
    }

    // dots
    if (currentPage < numberOfPages - 2) {
      pageButtons.push(
        <span className='page-btn dots' key='dots-1'>
          ...
        </span>
      );
    }

    // One after the current btn (optional)
    if (currentPage !== numberOfPages && currentPage !== numberOfPages - 1) {
      pageButtons.push(addPaginationBtn(currentPage + 1, false));
    }

    if (currentPage !== 1 && currentPage !== numberOfPages) {
      // Active Btn
      pageButtons.push(addPaginationBtn(currentPage, true));
    }

    // One before the current btn (optional)
    if (currentPage !== 1) {
      pageButtons.push(addPaginationBtn(currentPage - 1, false));
    }

    // dots
    if (currentPage > 3) {
      pageButtons.push(
        <span className='page-btn dots' key='dots-1'>
          ...
        </span>
      );
    }

    // First btn
    if (currentPage < numberOfPages) {
      pageButtons.push(addPaginationBtn(1, currentPage === 1));
    }

    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        type='button'
        className='btn next-btn'
        onClick={() => {
          const nextPage = currentPage + 1;
          if (nextPage > numberOfPages) return;
          onPageChange(nextPage);
        }}
      >
        <HiChevronDoubleRight /> <span>بعدی</span>
      </button>
      <div className='btn-container'>{renderPagination()}</div>
      <button
        type='button'
        className='btn prev-btn'
        onClick={() => {
          const prevPage = currentPage - 1;
          if (prevPage < 1) return;
          onPageChange(prevPage);
        }}
      >
        <span>قبلی</span>
        <HiChevronDoubleLeft />
      </button>
    </Wrapper>
  );
}
