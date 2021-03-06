import { Button } from 'react-bootstrap'
import { ChevronLeft, ChevronRight } from '@styled-icons/material'
import PaginationFL2 from './PaginationFL2'
import PaginationAlt from './PaginationAlt'
import PropTypes from 'prop-types'

export default function PaginationLarge({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageIndex,
  pageCount,
  gotoPage
}) {
  const isFL2 = (pageIndex === 0) || (pageIndex === 1) || (pageIndex === pageCount - 1) || (pageIndex === pageCount - 2)

  return (
    <>
      <Button variant='white' onClick={() => previousPage()} disabled={!canPreviousPage} data-testid='previousPage'><ChevronLeft size={20} /></Button>
      { isFL2
        ? <PaginationFL2 gotoPage={gotoPage} pageIndex={pageIndex} pageCount={pageCount} />
        : <PaginationAlt gotoPage={gotoPage} pageIndex={pageIndex} pageCount={pageCount} />
      }
      <Button variant='white' onClick={() => nextPage()} disabled={!canNextPage} data-testid='nextPage'><ChevronRight size={20} /></Button>
    </>
  )
}

PaginationLarge.protoTypes = {
  previousPage: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
}