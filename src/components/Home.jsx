import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='d-flex my-4'>
      <Button
        onClick={() => {
          navigate('/')
        }}
      >
        HOME
      </Button>
    </div>
  )
}

export default Home
