import PropTypes from 'prop-types';
import { Arrow } from "../../icon"
import { Alert, Pagination } from '@mui/material';
import { useState } from 'react';

const GlobalTable = ({
  title,
  columns,
  data,
  collapse,
  headerRight,
  isPagination,
  isAlignmentCenter,
  onClickRow,
  paginationControl
}) => {
  const [page, setPage] = useState(data?.current_page || 1);
  const [page_size, setPageSize] = useState(data?.page_size || 10);
  return (
    <section className='px-3 pb-3 bg-stroke'>
      {title &&
        <div className="sectionTitle" >
          <div className="section-heading !h-[70px]">
            <div className="flex justify-between items-center w-full">
              <h3 className="title">{title}</h3>
              <div className='flex items-center gap-3'>
                {
                  headerRight && headerRight
                }
                {
                  collapse && <Arrow />
                }
              </div>
            </div>
          </div>
          <div className="greenDivider"></div>
        </div>
      }
      <div className="dataTable">
        <div className="px-3 py-3 flex justify-between sticky top-0 bg-stroke z-10">
          {
            columns?.map((column, index1) => (
              <div className={`${column.sort ? 'cursor-pointer' : ''} capitalize font-medium text-base`} style={{
                width: column.width,
                display: column?.isAlignmentCenter || isAlignmentCenter ? 'flex' : 'initial',
                alignItems: column?.isAlignmentCenter || isAlignmentCenter ? 'center' : 'initial',
                justifyContent: column?.isAlignmentCenter || isAlignmentCenter ? 'center' : 'initial'
              }} key={index1}>
                <span>{column.fieldName}</span>
                {
                  column.sort &&
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M17.3 13.1996L12.464 20.3996L7.69995 13.1996H17.3Z" fill="#8B8987"></path>
                    <path d="M12.5 3.59961L7.69995 10.7996H17.3L12.5 3.59961Z" fill="#8B8987"></path>
                  </svg>
                }
              </div>
            ))
          }
        </div>
        <div className="tableBody">
          {data?.results?.length > 0 ?
            data?.results?.map((row, index2) => (<div className={`tableRow gap-4 justify-between ${onClickRow && 'cursor-pointer hover:bg-gray-50 transition-all'}`} key={index2} onClick={() => onClickRow && onClickRow(row)}>
              {
                columns.map((column, index3) => (
                  <div style={{
                    width: column.width,
                    display: column?.isAlignmentCenter || isAlignmentCenter ? 'flex' : 'initial',
                    alignItems: column?.isAlignmentCenter || isAlignmentCenter ? 'center' : 'initial',
                    justifyContent: column?.isAlignmentCenter || isAlignmentCenter ? 'center' : 'initial'
                  }} key={index3}>
                    {column.render(
                      column.field === 'sl' ?
                        data?.start_item ? data.start_item + index2 : index2 + 1
                        :
                        column.field ?
                          row[column.field] : row, index2)}
                  </div>
                ))
              }
            </div>
            ))
            :
            <Alert severity="info" className='!bg-white !justify-center'>
              No Data Found
            </Alert>
          }
        </div>
        {
          isPagination &&
          <div className='flex flex-col items-end gap-1'>
            <div className='mt-3 flex gap-1'>

              <select className='w-fit !h-[32px] text-sm border border-blue !pl-1 p-0'
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(1);
                  paginationControl({ page: 1, page_size: Number(e.target.value) });
                }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value={data?.count}>All</option>
              </select>
              <Pagination
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: 'var(--blue)',
                    fontSize: '14px',
                    border: '1px solid var(--blue)',
                    // borderRadius: '7px',
                  },
                  '& .MuiPaginationItem-root.MuiPaginationItem-ellipsis': {
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  },
                  '& .MuiSvgIcon-root': {
                    // fontSize: '28px',
                  },
                  '& .MuiButtonBase-root': {
                    background: 'var(--white) !important',
                    transition: 'all 0.3s ease',
                  },
                  '& .MuiButtonBase-root:hover': {
                    background: 'var(--green) !important',
                    color: 'var(--white) !important',
                    border: '1px solid var(--green) !important',
                  },
                  '& .Mui-selected': {
                    background: 'var(--green) !important',
                    color: 'var(--white) !important',
                    border: '1px solid var(--green) !important',
                  }
                }}
                page={page}
                count={data?.total_pages}
                variant="outlined"
                shape="rounded"
                onChange={(_, newPage) => {
                  if (page === newPage) return;
                  setPage(newPage);
                  paginationControl({ page: newPage, page_size });
                }}
              />
            </div>
            <small>Showing {data?.start_item} to {data?.end_item} of {data?.count}</small>
          </div>
        }
      </div>
    </section>
  )
}
GlobalTable.propTypes = {
  title: PropTypes.string.isRequired || PropTypes.node.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      fieldName: PropTypes.any.isRequired,
      sort: PropTypes.string,
      width: PropTypes.string,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
  data: PropTypes.shape({
    count: PropTypes.number,
    current_page: PropTypes.number,
    end_item: PropTypes.number,
    next: PropTypes.any,
    previous: PropTypes.any,
    page_size: PropTypes.number,
    results: PropTypes.array,
    start_item: PropTypes.number,
    total_pages: PropTypes.number,
  }).isRequired,
  collapse: PropTypes.bool,
  onClickRow: PropTypes.func,
  headerRight: PropTypes.any,
  isPagination: PropTypes.bool,
  isAlignmentCenter: PropTypes.bool,
  paginationControl: PropTypes.func,
};

GlobalTable.defaultProps = {
  collapse: false,
  headerRight: null,
  isPagination: false,
  isAlignmentCenter: false,
};
export default GlobalTable