import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavouritesIndicator from './components/FavouritesIndicator'
import Favourites from './components/Favourites'
import { Col, Container, Row } from 'react-bootstrap'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row className=' justify-content-between'>
          <Col xs={4}>
            <Home />
          </Col>
          <Col xs={4}>
            <FavouritesIndicator />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path='/' element={<MainSearch />} />
        <Route path='/:company' element={<CompanySearchResults />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
