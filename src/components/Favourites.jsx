import { Col, Row, Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
  // hooks di react-redux

  // cardArray sarà l'array di libri nel carrello in Redux
  const favouritesArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

  // otteniamo la funzione di dispatch
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <h1>FAVOURITES</h1>
        <ul style={{ listStyle: 'none' }}>
          {favouritesArray.map((company, i) => (
            <li key={i} className='my-4'>
              <Button
                variant='danger'
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAV',
                    payload: i,
                  })
                }}
              >
                REMOVE
              </Button>

              {company.company_name}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Favourites
