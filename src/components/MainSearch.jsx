import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { getJobsAction } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

// import FavouritesIndicator from './FavouritesIndicator'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(getJobsAction(query))
  }

  const searchResult = useSelector((reduxState) => {
    return reduxState.jobs.results
  })

  useEffect(() => {
    if (query) {
      dispatch(getJobsAction(query))
    }
  }, [query])

  console.log(searchResult)
  return (
    <Container>
      {/* <FavouritesIndicator /> */}
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {searchResult?.data?.length > 0 ? (
            searchResult?.data?.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <p>No results</p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
