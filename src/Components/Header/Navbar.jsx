import logo from '../../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';
function Navbar() {
     
const Links = (
     <ul className='lg:flex lg:flex-row'>
    <li className="inter text-black text-xl inter font-medium">
      <Link to="/">Home</Link>
    </li>
    <li className="inter text-black font-medium text-xl inter">
      <Link to="/apps">Apps</Link>
    </li>
    <li className="inter text-black font-medium text-xl inter">
      <Link to="/installation">Installation</Link>
    </li>
</ul>
)

  return (
    <div >
        <div className="navbar bg-base-100 shadow-sm p-[30px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box 
        z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    <Link to='/'><img src={logo} alt="" className='h-[30px] w-[30px] '/></Link>
    <a className="text-3xl inter gradient-text">AppDeck</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex flex-col">
     {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn inter gradient-bg inter text-2xl"><span><FaGithub /></span>Contribute</a>
  </div>
</div>
    </div>
  )
}

export default Navbar