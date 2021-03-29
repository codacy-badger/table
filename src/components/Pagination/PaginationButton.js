import { Button } from 'react-bootstrap'

export default function PaginationButton({
  gotoPage,
  pageIndex,
  pageNumber
}) {
  return (
    <Button
      variant='white'
      className={ pageNumber === pageIndex ? 'text-primary' : '' }
      onClick={() => gotoPage(pageNumber)}
      data-testid='button'
    >{ pageNumber + 1 }</Button>
  )
}