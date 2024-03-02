import { Link } from "react-router-dom";
import ThemeSwitcher from "../component/theme-switcher";
const Navbar = () => {
    return (
        
  <div className="relative bg-gradient-to-br  from-purple-400 to-black text-white">
        <ul className="px-4 py-2 flex justify-center gap-10 items-center w-full -z-30 ">
          {topNav.map((data, index) => (
           
                 <li key={index} className="hover:border-b border-b-0 py-2">
                    <Link to={data?.link}>   {data.name}  </Link>
                </li>
          ))}
       
        </ul>
        <div className="theme-switcher absolute top-0 right-2 z-10">
        <ThemeSwitcher />
      </div>
      </div>
       
    );
};

export default Navbar;

const topNav = [
    {
        id:1,
        name: 'Home',
        link: '/'
    },
    {
        id:2,
        name:'About',
        link:'/about',

    },
    {
        id:3,
        name:'Dashboard',
        link:'/dashboard'

    },
    {
        id:4,
        name: 'TF Project',
        link: '/contact'
    },
   
]