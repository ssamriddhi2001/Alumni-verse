import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoFull from '/logo_full.png';

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <img width="180" src={logoFull} alt="logo_full" />
                </Link>
                <ul className='flex gap-4'>
                    <Link to='/' className=''>
                        <li className='link' >Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='link' >About</li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
                        ) : (
                            <li className='link' >Sign In</li>
                        )}
                    </Link>
                </ul>
            </div>
        </div>
    );
}