import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

const FavouritesIndicator = () => {
  const navigate = useNavigate()

  const favArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

  return (
    <div className='d-flex justify-content-end my-4'>
      <Button
        onClick={() => navigate('/favourites')}
        className='d-flex align-items-center'
      >
        Favourites Job
        <span className='ms-2'>{favArray.length}</span>
      </Button>
    </div>
  )
}

export default FavouritesIndicator
