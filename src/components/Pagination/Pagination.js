import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setSelectedPage } from "../../store/actions/candidatesActions";

import "./Pagination.scss";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { pageCount, openedPage } = useSelector(({ candidates }) => candidates);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    dispatch(setSelectedPage(selectedPage));
  };

  return (
    <div className="paginateWraper">
      <ReactPaginate
        nextLabel="&rsaquo;"
        previousLabel="&lsaquo;"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        forcePage={openedPage}
        pageCount={Math.ceil(pageCount)}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
