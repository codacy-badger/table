import PaginationButton from './PaginationButton'
import { MoreHoriz } from '@styled-icons/material'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function PaginationFL2({
  gotoPage,
  pageIndex,
  pageCount
}) {
  return (
    <>
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={0} />
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={1} />
      <Button variant='white' disabled><MoreHoriz size={16} /></Button>
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageCount - 2} />
      <PaginationButton pageIndex={pageIndex} gotoPage={gotoPage} pageNumber={pageCount - 1} />
    </>
  )
}

PaginationFL2.propTypes = {
  gotoPage: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
}