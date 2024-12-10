import { Col, Row, Button } from 'react-bootstrap'
import { removeFromFavAction } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Favourites = () => {
  // hooks di react-redux

  // favouritesArray sarà l'array di preferiti
  const favouritesArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

  // otteniamo la funzione di dispatch
  const dispatch = useDispatch()
  console.log('Array dei favoriti', favouritesArray)

  return (
    <Row>
      <Col sm={12} className=' text-center'>
        <h1>FAVOURITES</h1>
        <ul style={{ listStyle: 'none' }}>
          {favouritesArray.map((fav, i) => (
            <li key={i} className='my-4'>
              <Link to={`/${fav}`}>{fav}</Link>
              <Button
                variant='danger'
                onClick={() => {
                  dispatch(removeFromFavAction(i))
                }}
              >
                REMOVE
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favourites
