import { useEffect, useState } from 'react'
import Loader from '../../loader/Loader'

const Home = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000)
  }, [isLoading])

  return (
    <>
    {isLoading ? <Loader /> : 
    <div>
      <h3>Dashboard ~</h3>
      <p>This is user's <b>Dashboard Page</b></p>
    </div>
    }
    </>
  )
}

export default Home