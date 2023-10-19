import moment from 'moment';
import logo from '../../../assets/logo.png'


const Header = () => {
    return (
        <div className='text-center text-black space-y-3 mb-5'>
           <img className='mx-auto' src={logo} alt="" />
           <p className=''>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;