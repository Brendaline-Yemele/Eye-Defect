import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import image from '../../image';



interface NavProps{
    items:Navitems[];
}
export interface Navitems{
    title:string;
    path:string;
    
}
function Navbar({items}:NavProps) {
    return (
        < >
        <div className='fixed w-full flex justify-between items-center p-4 bg-green-700 text-white'>
          
            <img className='align-left' src="./public/images/logo.png" alt="logo" />
            <div className='hidden md:flex gap-8 items-center'>
                <ul className='flex gap-10'>
                    {
                        items.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )) 
                    }
                </ul>
                <div className='flex gap-10'>
                   <Link to={'/Signup'}>
                    <Button className='py-2 px-4 text-green-700 bg-white rounded-xl' title='Book An Appointment'/>
                    </Link>
                </div>
            </div>
            <img className='w-10 md:hidden' src={image.icons} alt="" />
             
        </div>
        </>
    );
}

export default Navbar