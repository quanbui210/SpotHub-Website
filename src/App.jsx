import React, {useState} from "react"
import NavBar from './components/navBar/navBar'
import Cards from './components/card/Cards'
import Slider from './components/SliderIntro/Slider'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Services from './components/Services/Services'


library.add(fas)

const cardInfo = [
  {
    name: 'Joe',
    title: 'Full Stack Developer',
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    description: 'Joe is an experienced Full Stack Developer with 3+ years of experience, is main tech stacks are: JavaScript, ReactJS, Node.js, ExpressJs, Docker, HubSpot CMS, PHP and AWS',
  },
  {
    name: 'Mike',
    title: 'Junior Frontend Developer',
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    description: '  Mike is an entry-lever Front-End Developer with good performance during the internship, his main tech stacks are: JavaScript, ReactJS and HubSpot-CMS'

  },
  {
    name: 'Andrew',
    title: 'Junior Backend Developer',
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    description: '  Andrew is an entry-lever Back-End Developer with good performance during the internship, his main tech stacks are: NodeJs, PHP, JavaScript, ExpressJs',
  },
  {
    name: 'Nick',
    title: 'Team Lead',
    image: "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
    description: '  Nick is the Full Stack Developer Team Lead with 7+ years of experience, her main tech stacks are: JavaScript, ReactJS, Node.js, AngularJS, VueJS, NextJs, and AWS',
  },
]

const servicesInfo = [
  {
    title: 'Sales & CRM',
    image: "https://www.kaks.io/hubfs/2021/Digifianz/Icons/icon12.png",
    description: 'Challenging HubSpot CRM onboardings are our specialty. We are extremely experienced with platform deployments, such as migrations, sales process design and integrations',
  },
  {
    title: 'Marketing & Growth',
    image: "https://www.kaks.io/hubfs/2021/Digifianz/Icons/icon11.png",
    description: 'From lead process design to HubSpot deployments and from website projects to content marketing. When you want to build long-lasting profit for your company, we are your partner using the HubSpot platform. '

  },
  {
    title: 'Technical Integration',
    image: "https://www.kaks.io/hubfs/2021/Digifianz/Icons/icon14.png",
    description: 'Its no wonder we are called the leading technical HubSpot partner in the field. Integrations, migrations, customized CMS-modules, website projects, applications and implementations are our core competence.',
  },
]



function App() {
  const [cards, setCards] = useState(cardInfo)
  const services = servicesInfo
  return (
    <div>
      <div className='navbar-wrapper'>
        <NavBar/>
      </div> 
      <div className='slider'><Slider/></div> 
      <Services items={services}/>
      <Cards contents = {cards}/>
      </div>
  )
}

export default App;
