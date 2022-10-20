import React, {useState, useEffect} from "react"
import NavBar from './components/navBar/navBar'
import Cards from './components/card/Cards'
import Slider from './components/SliderIntro/Slider'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import GoTopBtn from './components/UI/GoTopBtn'



library.add(fas)




function App() {
  const [cards, setCards] = useState([])  
  const [services, setServices] = useState([])
  const [goTop, setGoTop] = useState(false)
  const url = 'http://localhost:3001/'
  
  useEffect(() => {
    axios
    .get(`${url}cardInfo`)
    .then(response => {
      setCards(response.data)
      console.log(response.data)
    })
  }, [])
  
  useEffect(() => {
    axios
    .get(`${url}servicesInfo`)
    .then(response => {
      setServices(response.data)
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY >= 200) {
            setGoTop(true)
        } else {
            setGoTop(false)
        }
    }
      window.addEventListener('scroll', handleScroll)
      return () => {
       window.removeEventListener('scroll', handleScroll)
      }
}, [])

  const goTopHandler = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }   

  return (
    <div>
      <div className='navbar-wrapper'>
        <NavBar/>
      </div> 
      <div className='slider'><Slider/></div> 
      <Services items={services}/>
      <Cards contents = {cards}/>
      <Footer className='footer'/>
      {goTop && (
        <GoTopBtn className='go-top' goTop={goTopHandler}/>
      )}
      </div>
  )
}

export default App;
