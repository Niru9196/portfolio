import Sidebar from '../Sidebar/Sidebar'
import './Navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return ( 
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span initial = {{opacity: 0, scale: 0.5}}  animate = {{opacity: 1, scale: 1.5}} transition={{duration: 0.5}}>Portfolio</motion.span>
        <div className='social'>
            <li href = '#' ><img src='/linkedin.png' alt='linkedin'/></li>
            <li href = '#' ><img src='/cat.jpg' alt='github' /></li>
            <li href = '#' ><img src='/gmail Icon.png' alt='gmail'/></li>
        </div>
      </div>
    </div>
  )
}
 
export default Navbar
